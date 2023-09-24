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
      5,
      'Parvovirus',
      'https://images.pexels.com/photos/160722/cat-tiger-getiegert-feel-at-home-160722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'Juan Perez'
    )
  ];

  findAll() {
    return this.petList
  }

  findById(id:number):Pet{
    return <Pet>this.petList.find(o => o.id === id)
  }
}
