import { Component } from '@angular/core';
import { Pet } from 'src/app/model/pet/pet';
import {PetService} from "../../services/pet/pet.service";

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent {

  constructor(private petService: PetService) {
  }

  sendPet!: Pet;

  formPet: Pet = new Pet(
    0,
    '',
    '',
    new Date(),
    0,
    '',
    '',
    ''
  )

  addPet() {
    
    this.formPet.birthdate = new Date(this.formPet.birthdate)
    this.sendPet = Object.assign({}, this.formPet);
    this.formPet.owner = "Luisa Parra"

    this.petService.addPet(this.formPet);
  }
}
