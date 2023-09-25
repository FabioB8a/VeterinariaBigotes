import { Component, OnInit } from '@angular/core';

interface Veterinarian {
  name: string;
  description: string;
  interests: string[];
  imageSrc: string;
}

interface Review {
  name: string;
  catName: string;
  race: string;
  imageSrc: string;
  review: string;
}



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public vetInfo: Veterinarian[] = [
    {
      name: "Dra Laura Fernández",
      description: "Especialista en medicina gatuna y cuidado de gatos",
      interests: ["Medicina Gatuna", "Terapias alternativas"],
      imageSrc: "/assets/images/people/doctorA.png"
    },
    {
      name: "Dr. Juan Pedraza",
      description: "Especialista en medicina de animales de granja",
      interests: ["Animales de granja", "Cirugía"],
      imageSrc: "/assets/images/people/doctorB.png"
    },
    {
      name: "Dr. José Pérez",
      description: "Especialista en medicina de animales de compañía",
      interests: ["Animales de compañía", "Cirugía"],
      imageSrc: "/assets/images/people/doctorC.png"
    }
  ];

  public currentVetIndex: number = 0;

  // Add other properties and functions...

  ngOnInit(): void {
    this.displayCurrentVet();
  }

  public displayCurrentVet(): void {
    const currentVet = this.vetInfo[this.currentVetIndex];
    // Rest of the displayCurrentVet logic...
  }

  public prevButtonClick(): void {
    this.currentVetIndex = (this.currentVetIndex - 1 + this.vetInfo.length) % this.vetInfo.length;
    this.displayCurrentVet();
  }

  public nextButtonClick(): void {
    this.currentVetIndex = (this.currentVetIndex + 1) % this.vetInfo.length;
    this.displayCurrentVet();
  }

}
