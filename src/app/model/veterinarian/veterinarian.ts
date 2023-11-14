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
    status: string;
    treatments?: Treatment[];
    entryDate: Date;


    constructor(
      id: number,
      idCard: number,
      firstName: string,
      firstLastName: string,
      secondLastName: string,
      password: string,
      speciality: string,
      imgUrl: string,
      status: string,
      entryDate: Date
    ) {
      this.id = id;
      this.idCard = idCard;
      this.firstName = firstName;
      this.firstLastName = firstLastName;
      this.secondLastName = secondLastName;
      this.password = password;
      this.speciality = speciality;
      this.imgUrl = imgUrl;
      this.status = "Activo";
      this.entryDate = entryDate;
    }
  }
