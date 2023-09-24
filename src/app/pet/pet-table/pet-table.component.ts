import { Component } from '@angular/core';
import {Pet} from "../../model/pet/pet";

@Component({
  selector: 'app-pet-table',
  templateUrl: './pet-table.component.html',
  styleUrls: ['./pet-table.component.css']
})
export class PetTableComponent {


  petList: Pet[] = [
    new Pet(
      1,
      'Firulais',
      'Chihuahua',
      new Date('2019-01-01'),
      5,
      'Parvovirus',
      'https://images.pexels.com/photos/160722/cat-tiger-getiegert-feel-at-home-160722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'Juan Perez'
    )
  ];
}
