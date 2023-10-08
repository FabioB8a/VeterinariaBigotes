import { Component } from '@angular/core';
import {Pet} from "../../model/pet/pet";
import {PetService} from "../../services/pet/pet.service";

@Component({
  selector: 'app-pet-table',
  templateUrl: './pet-table.component.html',
  styleUrls: ['./pet-table.component.css']
})
export class PetTableComponent {

  selectedPet!: Pet;

  petList!: Pet[];

  constructor(
    private petService: PetService
  ) {
  }

  filterText: string = '';
  isNameFilterActive: boolean = false;

  ngOnInit(): void {
    this.petService.findAll().subscribe(
      data => this.petList = data.map(x => Object.assign(new Pet(x.id,x.name,x.breed,x.birthdate,x.weight,x.disease,x.imgUrl), x))
    )

  }

  // Correcciones posteriores
  filterPetsByName() {
    if (this.isNameFilterActive) {
      return this.petList.filter(pet =>
        pet.name.toLowerCase().includes(this.filterText.toLowerCase())
      );
    } else {
      return this.petList; // If the checkbox is not active, return the full list
    }
  }

  deleteById(pet:Pet):void{
    const index = this.petList.indexOf(pet);
    this.petList.splice(index,1);
    this.petService.deleteById(pet.id);
  }
}
