import { Treatment } from "../treatment/treatment";

export class Veterinarian {
    id: number;
    idCard: number;
    firstName: string;
    firstLastName: string;
    secondLastName: string;
    password: string;
    speciality: string;
    imgUrl: string;
    treatments?: Treatment[];
  
    constructor(
      id: number,
      idCard: number,
      firstName: string,
      firstLastName: string,
      secondLastName: string,
      password: string,
      speciality: string,
      imgUrl: string
    ) {
      this.id = id;
      this.idCard = idCard;
      this.firstName = firstName;
      this.firstLastName = firstLastName;
      this.secondLastName = secondLastName;
      this.password = password;
      this.speciality = speciality;
      this.imgUrl = imgUrl;
    }
  }
