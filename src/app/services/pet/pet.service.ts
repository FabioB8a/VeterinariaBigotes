import {Injectable} from '@angular/core';
import {Pet} from "../../model/pet/pet";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor() { }

  petList: Pet[] = [
    new Pet(
      1,
      'Firulais',
      'Chihuahua',
      new Date('2019-01-01'),
      500,
      'Parvovirus',
      'https://images.pexels.com/photos/160722/cat-tiger-getiegert-feel-at-home-160722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'Juan Perez'
    ),
    new Pet(
      2,
      'Bella',
      'Siberian',
      new Date('2022-07-14'),
      500,
      'Ninguna',
      'https://images.pexels.com/photos/1056252/pexels-photo-1056252.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Andrés Perez'
    )
  
  ];

  findAll() {
    return this.petList
  }

  findById(id:number):Pet{
    return <Pet>this.petList.find(o => o.id === id)
  }
}
