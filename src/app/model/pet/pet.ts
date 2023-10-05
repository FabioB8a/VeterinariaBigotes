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

  constructor(
    id: number,
    name: string,
    breed: string,
    birthdate: string,
    weight: number,
    disease: string,
    imgUrl: string
  ) {
    this.id = id;
    this.name = name;
    this.breed = breed;
    this.birthdate = birthdate;
    this.weight = weight;
    this.disease = disease;
    this.imgUrl = imgUrl;
    this.status = 'En tratamiento';
  }


  calculateAge(): number {
    // Assuming this.birthdate is in the format "YYYY-MM-DD"
    const birthDateParts = this.birthdate.split('-'); // Split the string into an array of parts
    const year = parseInt(birthDateParts[0], 10);
    const month = parseInt(birthDateParts[1], 10) - 1; // Months are 0-indexed in JavaScript
    const day = parseInt(birthDateParts[2], 10);
  
    // Create a Date object using the parsed parts
    const birthDate = new Date(year, month, day);
  
    const currentDate = new Date();
    const ageInMilliseconds = currentDate.getTime() - birthDate.getTime();
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInYears = ageInSeconds / (60 * 60 * 24 * 365.25);
    return Math.floor(ageInYears);
  }
}
