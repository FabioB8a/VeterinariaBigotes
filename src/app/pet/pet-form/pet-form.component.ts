import {Component, Input} from '@angular/core';
import { Pet } from 'src/app/model/pet/pet';
import { PetService } from "../../services/pet/pet.service";
import { OwnerService } from "../../services/owner/owner.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from 'src/app/model/owner/owner';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent {

  @Input() userType: string = '';
  @Input() vetId: string = '';
  @Input() ownerId: string = '';
  constructor(private petService: PetService, private ownerService: OwnerService, private route: ActivatedRoute, private router: Router) { }

  sendPet!: Pet;
  formPet : Pet = {
    id: 0,
    name: '',
    disease: '',
    birthdate: '',
    weight: 0,
    breed: '',
    status: 'En tratamiento',
    calculateAge() {
        return 0
    },
    imgUrl: ''
  };

  petId!: any;
  idCardText!: any;


  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      if ('type' in params) {
        this.userType = params['type'].toString();
      }
      if ('petId' in params) {
        this.petId = Number(params['petId']);

        this.petService.findById(this.petId).subscribe(data => {
          this.formPet = new Pet(data.id, data.name, data.breed, data.birthdate, data.weight, data.disease, data.imgUrl, data.owner);
          this.idCardText = data.owner?.idCard
        });
      }
      if ('id' in params) {
        this.vetId = params['id'].toString();
      }
      if ('ownerId' in params) {
        this.ownerId = params['ownerId'].toString();
        console.log("el owner id es", this.ownerId)
      }
    });
  }

  savePet() {

    if (!this.verifyForm()) {
      return;
    }
    console.log("la mascota es", this.formPet);

      this.ownerService.findByIDCard(this.idCardText).subscribe(
          data => {
              if (data) {
                  this.formPet.owner = new Owner(data.id, data.idCard, data.firstName, data.firstLastName, data.secondLastName, data.phone, data.email);

                  // Now that the owner data is updated, proceed with saving the pet
                  this.sendPet = Object.assign({}, this.formPet);
                  console.log("la mascota send es", this.sendPet);
                  if (this.petId != null) {
                      this.petService.updatePet(this.sendPet);
                  } else {
                      this.petService.addPet(this.sendPet);
                  }

              }
          },
          error => {
              if (error.status === 404) {
                  alert('No existe un dueño con esa cédula.');
              } else {
                  alert('Un error ocurrio, vuelva a intentarlo.');
              }
          },
          () => {
            this.leave();
          }
      );


  }

  leave(){
    if ( this.ownerId === null) {
      setTimeout(() => {
        this.router.navigate(['/pet/all'], {queryParams: {type: this.userType, id: this.vetId}});
      }, 1000);
    }else {
      setTimeout(() => {
        this.router.navigate(['/owner/detail', this.ownerId], {queryParams: {type: this.userType, id: this.vetId, ownerId: this.ownerId}});
      }, 1000);
    }
  }

  verifyForm() {
    if (!this.formPet.name) {
      alert("El campo nombre es obligatorio.");
      return false;
    }

    if (!this.formPet.breed) {
      alert("El campo raza es obligatorio.");
      return false;
    }

    if (!this.formPet.birthdate || !this.isDateValid()) {
      alert("El campo fecha de nacimiento es obligatorio y debe ser menor a la fecha actual.");
      return false;
    }

    if (!this.formPet.weight) {
      alert("El campo peso es obligatorio.");
      return false;
    }

    if (!this.formPet.disease) {
      alert("El campo enfermedad es obligatorio.");
      return false;
    }

    if (!this.formPet.imgUrl) {
      alert("El campo imagen es obligatorio.");
      return false;
    }

    return true;
  }

  isDateValid() {
    let date = new Date(this.formPet.birthdate);
    let today = new Date();
    return date < today;
  }

}
