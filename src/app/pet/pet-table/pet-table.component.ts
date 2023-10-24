import {Component, Input} from '@angular/core';
import {Pet} from "../../model/pet/pet";
import {PetService} from "../../services/pet/pet.service";
import { ActivatedRoute } from '@angular/router';
import {query} from "@angular/animations";

@Component({
    selector: 'app-pet-table',
    templateUrl: './pet-table.component.html',
    styleUrls: ['./pet-table.component.css']
})
export class PetTableComponent {

  @Input() userType: string ='';
  @Input() vetId: string = '';

  selectedPet!: Pet;

    petList!: Pet[];
    showAllPets: boolean = true;


    constructor(
        private petService: PetService
        ,private route: ActivatedRoute
    ) {

    }


    filterText: string = '';
    isNameFilterActive: boolean = false;

    ngOnChanges(): void {

    }

    ngOnInit(): void {

        this.route.queryParams.subscribe(params => {
            this.userType = params['type'].toString();
            //let type =  localStorage.getItem('userType');
            if (this.userType === 'vet' || this.userType === 'admin') {
              if ('id' in params) {
                this.vetId = params['id'].toString();
              }
              if ('ownerId' in params) {
                const ownerId = Number(params['ownerId']);
                this.petService.findByOwner(ownerId).subscribe(
                  data => this.petList = data.map(x => Object.assign(new Pet(x.id, x.name, x.breed, x.birthdate, x.weight, x.disease, x.imgUrl, x.owner), x))
                );
              }
              else {
                this.petService.showAllPetsInTreatment().subscribe(
                  data => this.petList = data.map(x => Object.assign(new Pet(x.id, x.name, x.breed, x.birthdate, x.weight, x.disease, x.imgUrl, x.owner), x))
                );
              }

            } else if (this.userType == 'user') {
                const userId = params['id'].toString();

                this.petService.findByOwner(userId).subscribe(
                    data => this.petList = data.map(x => Object.assign(new Pet(x.id, x.name, x.breed, x.birthdate, x.weight, x.disease, x.imgUrl, x.owner), x))
                );
            }
            else {
                localStorage.setItem('userType',this.userType);
            }
        });
    }

    filterPetsByName() {
        if (this.isNameFilterActive) {
            return this.petList.filter(pet =>
                pet.name.toLowerCase().includes(this.filterText.toLowerCase())
            );
        } else {
            return this.petList; // If the checkbox is not active, return the full list
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
    const index = this.petList.indexOf(pet);
    this.petList.splice(index, 1);
  }


  filterPets() {
    if ('ownerId' in this.route.snapshot.queryParams) {
      const ownerId = this.route.snapshot.queryParams['ownerId'];

      if (this.showAllPets) {
        this.petService.findByOwner(ownerId).subscribe((data: Pet[]) => {
          this.petList = data.filter(pet => pet.status === 'En tratamiento');
        });
      } else {
        this.petService.findByOwner(ownerId).subscribe((data: Pet[]) => {
          this.petList = data.filter(pet => pet.status === 'Alta');
        });
      }
    } else {
      if (this.showAllPets) {
        this.petService.showAllPetsInTreatment().subscribe((data: Pet[]) => {
          this.petList = data.map(x => Object.assign(new Pet(x.id, x.name, x.breed, x.birthdate, x.weight, x.disease, x.imgUrl, x.owner), x));
        });
      } else {
        this.petService.showAllPetsDischarged().subscribe((data: Pet[]) => {
          this.petList = data.map(x => Object.assign(new Pet(x.id, x.name, x.breed, x.birthdate, x.weight, x.disease, x.imgUrl, x.owner), x));
          console.log(data);
        });
      }
    }
  }



  protected readonly query = query;
  protected readonly String = String;
}
