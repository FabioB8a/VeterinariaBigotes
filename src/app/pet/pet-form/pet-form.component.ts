import { Component } from '@angular/core';
import { Pet } from 'src/app/model/pet/pet';
import { PetService } from "../../services/pet/pet.service";
import { OwnerService } from "../../services/owner/owner.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent {

  constructor(private petService: PetService, private ownerService: OwnerService, private route: ActivatedRoute, private router: Router) { }

  sendPet!: Pet;
  formPet : Pet = {
    id: 0,
    name: '',
    disease: '',
    birthdate: '',
    weight: 0,
    breed: '',
    status: '',
    calculateAge() {
        return 0
    },
    imgUrl: '',
    ownerId: 0
  };

  petId!: any;


  ngOnInit() {
    
    this.route.queryParams.subscribe(params => {
      if ('petId' in params) {
        this.petId = Number(params['petId']);
        console.log(params['petId']);

        this.petService.findById(this.petId).subscribe(data => {
          console.log(data);
          this.formPet = new Pet(data.id, data.name, data.breed, data.birthdate, data.weight, data.disease, data.imgUrl, data.ownerId);
          this.ownerService.findOwnerByPets_Id(this.petId).subscribe(owner => {
            this.formPet.ownerId = owner.id;
          });
          
        });
      }
    });
  }

  savePet() {
    this.sendPet = Object.assign({}, this.formPet);

    if (this.petId != null){
      this.petService.updatePet(this.formPet!!);
    }
    else{
      console.log(this.formPet);
      
      this.petService.addPet(this.formPet!!);
    }

    this.leave();
    
  }

  leave(){
    this.router.navigate(['/pet/all'], {queryParams: {type: "vet"}});
  }
  
}
