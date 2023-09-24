export class Pet {

  id: number;
  name: string;
  breed: string;
  birthdate: Date;
  weight: number;
  disease: string;
  imgUrl: string;
  status: string;
  owner: string;

  constructor(
    id: number,
    name: string,
    breed: string,
    birthdate: Date,
    weight: number,
    disease: string,
    imgUrl: string,
    owner: string
  ) {
    this.id = id;
    this.name = name;
    this.breed = breed;
    this.birthdate = birthdate;
    this.weight = weight;
    this.disease = disease;
    this.imgUrl = imgUrl;
    this.status = 'En tratamiento';
    this.owner = owner;
  }


  calculateAge(): number {
    const currentDate = new Date();
    const birthDate = this.birthdate;
    const ageInMilliseconds = currentDate.getTime() - birthDate.getTime();
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInYears = ageInSeconds / (60 * 60 * 24 * 365.25);
    return Math.floor(ageInYears);
  }
}
