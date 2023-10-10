import { Owner } from "../owner/owner";

export class Pet {

  id: number;
  name: string;
  breed: string;
  birthdate: string;
  weight: number;
  disease: string;
  imgUrl: string;
  status: string;
  owner: Owner

  constructor(
    id: number,
    name: string,
    breed: string,
    birthdate: string,
    weight: number,
    disease: string,
    imgUrl: string,
    owner: Owner
  ) {
    this.id = id;
    this.name = name;
    this.breed = breed;
    this.birthdate = birthdate;
    this.weight = weight;
    this.disease = disease;
    this.imgUrl = imgUrl;
    this.status = 'En tratamiento';
    this.owner = owner
  }


  calculateAge(): number {
    const birthDateParts = this.birthdate.split('-');
    const year = parseInt(birthDateParts[0], 10);
    const month = parseInt(birthDateParts[1], 10) - 1; 
    const day = parseInt(birthDateParts[2], 10);
  
    const birthDate = new Date(year, month, day);
  
    const currentDate = new Date();
    const ageInMilliseconds = currentDate.getTime() - birthDate.getTime();
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInYears = ageInSeconds / (60 * 60 * 24 * 365.25);
    return Math.floor(ageInYears);
  }
}
