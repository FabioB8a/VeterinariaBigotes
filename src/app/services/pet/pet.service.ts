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
      'Pompita',
      'British Shorthair',
      new Date(2015, 2, 12),
      824.65,
      'Hipotiroidismo',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.kbfqBAI5WHjiefXdgj-tQQHaE5%26pid%3DApi&f=1&ipt=6869c5c81c50f76e2738364716558ebce3723a4dd094d0d9179cd54b1525d0dc&ipo=images',
      'Juan Perez'
    ),
    new Pet(
      2,
      'Fifi',
      'Abisinio',
      new Date(2021, 7, 24),
      200.00,
      'Tumores mamarios',
      'https://images.pexels.com/photos/866496/pexels-photo-866496.jpeg?auto=compress&cs=tinysrgb&w=600',
      'Fabio Parra'
    ),
    new Pet(
      3,
      'Mimosa',
      'Maine Coon',
      new Date(2020, 4, 15),
      4065.82,
      'Conjuntivitis',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Dg-lJLyICJTPKLDcKOuYtgHaEo%26pid%3DApi&f=1&ipt=74cb2a44995bd708e41b783acc38bbe08949fdf0f140e082347bd5ab5efa6dd6&ipo=images',
      'Martha Cubides'
    ),
    new Pet(
      4,
      'Gizmo',
      'Tonkinés',
      new Date(2015, 8, 15),
      1988.20,
      'Pancreatitis',
      'https://images.unsplash.com/photo-1513977055326-8ae6272d90a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
      'Luis Sánchez'
    ),
    new Pet(
        5,
        'Mila',
        'Siberiano',
        new Date(2021, 3, 19),
        2694.84,
        'Otitis',
        'https://images.pexels.com/photos/866496/pexels-photo-866496.jpeg?auto=compress&cs=tinysrgb&w=600',
        'Ana Rodríguez'
    ),
    new Pet(
        6,
        'Leo',
        'Rex Selkirk',
        new Date(2015, 7, 4),
        4553.99,
        'Insuficiencia renal',
        'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600',
        'Pedro Gómez'
    ),
    new Pet(
        7,
        'Pompita',
        'Persa',
        new Date(2016, 6, 8),
        1782.87,
        'Problemas cardíacos',
        'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=600',
        'Laura Martínez'
    ),
    new Pet(
        8,
        'Puma',
        'Manx',
        new Date(2015, 9, 9),
        1530.87,
        'Insuficiencia renal',
        'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=600',
        'Carlos López'
    ),
    new Pet(
        9,
        'Silvestre',
        'British Shorthair',
        new Date(2019, 4, 4),
        1462.31,
        'Síndrome de Cushing',
        'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
        'Isabel Fernández'
    ),
    new Pet(
        10,
        'Dolly',
        'Sphynx',
        new Date(2016, 8, 25),
        4872.04,
        'Problemas cardíacos',
        'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=600',
        'Javier Ramírez'
    ),
    new Pet(
        11,
        'Azul',
        'Azul Ruso',
        new Date(2015, 3, 16),
        2991.73,
        'Síndrome de Cushing',
        'https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&w=600',
        'Sara González'
    ),
    new Pet(
        12,
        'Mimi',
        'Azul Ruso',
        new Date(2022, 11, 3),
        1605.30,
        'Asma',
        'https://images.pexels.com/photos/209037/pexels-photo-209037.jpeg?auto=compress&cs=tinysrgb&w=600',
        'Alejandro Soto'
    ),
    new Pet(
        13,
        'Fifi',
        'Abisinio',
        new Date(2019, 8, 2),
        4495.18,
        'Obesidad',
        'https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=600',
        'Elena Pérez'
    ),
    new Pet(
        14,
        'Simba',
        'Rex Selkirk',
        new Date(2016, 9, 24),
        4409.42,
        'Gusano del corazón',
        'https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&w=600',
        'Andrés Sánchez'
    ),
    new Pet(
        15,
        'Oreo',
        'Maine Coon',
        new Date(2022, 3, 18),
        1965.12,
        'Anemia',
        'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&w=600',
        'María González'
  )
  
  ];

  findAll() {
    return this.petList
  }

  findById(id:number):Pet{
    return <Pet>this.petList.find(o => o.id === id)
  }

  savePet(newPet: Pet) {
    if (newPet.id !== 0) {
      // Si el id no es 0, actualizamos la mascota existente
      const index = this.petList.findIndex(pet => pet.id === newPet.id);
      if (index !== -1) {
        this.petList[index] = newPet;
      }
    } else {
      // Si el id es 0, agregamos una nueva mascota
      newPet.id = this.petList.length + 1;
      this.petList.push(newPet);
    }
  }

  deleteById(id: number) {
    const index = this.petList.findIndex(pet => pet.id === id);
    if (index !== -1) {
      this.petList.splice(index, 1);
    }
  }
  
}
