import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OwnerService} from "../../services/owner/owner.service";
import {Owner} from "../../model/owner/owner";
import {Pet} from "../../model/pet/pet";
import {PetService} from "../../services/pet/pet.service";

@Component({
  selector: 'app-owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.css']
})
export class OwnerDetailComponent {
  @Input() owner: Owner = new Owner(0, 0, "", "", "", "", "");
  @Input() userType: string = '';
  @Input() vetId: string = '';
  petlist!: Pet[];
  showAllPets: boolean = true;
  id!: number;

  constructor(
    private ownerService: OwnerService,
    private petService: PetService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.ownerService.findById(this.id).subscribe((data) => {
      this.owner = new Owner(data.id, data.idCard, data.firstName, data.firstLastName, data.secondLastName, data.phone, data.email);
    });
    if ('type' in this.route.snapshot.queryParams) {
      this.userType = this.route.snapshot.queryParams['type'].toString();
    }
    if ('id' in this.route.snapshot.queryParams) {
      this.vetId = this.route.snapshot.queryParams['id'].toString();
    }

    this.petService.findByOwner(this.id).subscribe(
      data => this.petlist = data.map(x => Object.assign(new Pet(x.id, x.name, x.breed, x.birthdate, x.weight, x.disease, x.imgUrl, x.owner), x)).filter(pet => pet.status === 'En tratamiento')
    );

  }

  filterPets() {

    if (this.showAllPets) {
      this.petService.findByOwner(this.id).subscribe(
        data => this.petlist = data.map(x => Object.assign(new Pet(x.id, x.name, x.breed, x.birthdate, x.weight, x.disease, x.imgUrl, x.owner), x)).filter(pet => pet.status === 'En tratamiento')
      );
    } else {
      this.petService.findByOwner(this.id).subscribe(
        data => this.petlist = data.map(x => Object.assign(new Pet(x.id, x.name, x.breed, x.birthdate, x.weight, x.disease, x.imgUrl, x.owner), x)).filter(pet => pet.status === 'Alta')
      );
    }

  }

  deleteById(pet: Pet): void {
    const id = pet.id;
    const newStatus = 'Alta';  // Cambiar el estado a 'Alta' o el estado deseado
    const newDisease = 'ninguna'; // Cambiar la enfermedad a 'ninguna' o la enfermedad deseada

    // Cambia el estado de la mascota directamente a través del servicio
    pet.status = newStatus;
    pet.disease = newDisease;

    this.petService.updatePet(pet);
    // Cuando se actualiza el estado, elimina la mascota de la lista
    const index = this.petlist.indexOf(pet);
    this.petlist.splice(index, 1);
  }

}
