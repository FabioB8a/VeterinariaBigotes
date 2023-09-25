import { Drug } from "../drug/drug";
import { Pet } from "../pet/pet";
import { Veterinarian } from "../veterinarian/veterinarian";

export class Treatment {
    id!: number;
    date: Date;
    pet!: Pet;
    drug!: Drug;
    veterinarian!: Veterinarian;
    description?: string; 
  
    constructor(date: Date, description?: string) {
      this.date = date;
      this.description = description; 
    }
  }