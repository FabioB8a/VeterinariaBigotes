import { Treatment } from "../treatment/treatment";

export class Drug {
    id?: number;
    name: string;
    price: number;
    treatments?: Treatment[];
  
    constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
    }
  }