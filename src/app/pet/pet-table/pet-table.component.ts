import { Component } from '@angular/core';
import {Pet} from "../../model/pet/pet";
import {PetService} from "../../services/pet/pet.service";

@Component({
  selector: 'app-pet-table',
  templateUrl: './pet-table.component.html',
  styleUrls: ['./pet-table.component.css']
})
export class PetTableComponent {

  constructor(private petService: PetService) {
  }


  petList!: Pet[];

  ngOnInit(): void {
    this.petList = this.petService.findAll();
  }

  deleteById(id:number):void{
    this.petService.deleteById(id);
  }
}
