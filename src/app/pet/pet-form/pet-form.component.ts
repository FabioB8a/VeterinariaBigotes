import { Component } from '@angular/core';
import { Pet } from 'src/app/model/pet/pet';
import {PetService} from "../../services/pet/pet.service";
import { ActivatedRoute } from '@angular/router';
import { Owner } from 'src/app/model/owner/owner';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent {

  constructor(private petService: PetService, private route: ActivatedRoute) { }

  sendPet!: Pet;

  formPet: Pet = new Pet(
    0,
    '',
    '',
    '',
    0,
    '',
    ''
  )

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if ('petId' in params) {
        const petId = Number(params['petId']);
        // Change logic here to find the owner and then the pet of the owner :))
        this.petService.findById(petId);
      }
    });
  }


  savePet() {
    // Change logic from owner
    this.sendPet = Object.assign({}, this.formPet);
    this.petService.addPet(this.formPet);
  }
}
