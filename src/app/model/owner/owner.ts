import { Pet } from "../pet/pet";

export class Owner {
    id: number;
    idCard: number;
    firstName: string;
    firstLastName: string;
    secondLastName: string;
    phone: string;
    email: string;
    pets!: Pet[];
  
    constructor(
      id: number,
      idCard: number,
      firstName: string,
      firstLastName: string,
      secondLastName: string,
      phone: string,
      email: string
    ) {
      this.id = id;
      this.idCard = idCard;
      this.firstName = firstName;
      this.firstLastName = firstLastName;
      this.secondLastName = secondLastName;
      this.phone = phone;
      this.email = email;
    }
  }