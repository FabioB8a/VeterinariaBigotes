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
  public reviews: Review[] = [
    {
      name: "Fabio Buitrago",
      catName: "Maw",
      race: "Gato naranja",
      imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.kbfqBAI5WHjiefXdgj-tQQHaE5%26pid%3DApi&f=1&ipt=6869c5c81c50f76e2738364716558ebce3723a4dd094d0d9179cd54b1525d0dc&ipo=images",
      review: "Desde el primer instante, quedó claro que el personal de la clínica tiene un profundo amor y respeto por los animales. Fui recibido con una sonrisa amable y mi mascota fue saludada con caricias y mimos.Este enfoque empático realmente marcó la diferencia para mí, ya que mi mascota a menudo se siente nerviosa en entornos médicos."
    },
    {
      name: "Luisa Parra",
      catName: "Ronny",
      race: "Gato blanco",
      imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Dg-lJLyICJTPKLDcKOuYtgHaEo%26pid%3DApi&f=1&ipt=74cb2a44995bd708e41b783acc38bbe08949fdf0f140e082347bd5ab5efa6dd6&ipo=images",
      review: "No puedo estar más satisfecho con la atención que recibimos en esta clínica veterinaria. Desde el momento en que entramos, quedó claro que los animales son verdaderamente valorados aquí. La amabilidad del personal y el afecto que mostraron hacia mi mascota me llenaron de confianza de inmediato."
    },
    {
      name: "Andrés García",
      catName: "Peter",
      race: "Gato blanco",
      imageSrc: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600",
      review: "No puedo expresar lo agradecido que estoy por haber encontrado esta increíble clínica veterinaria. Desde el primer instante que crucé la puerta, quedó claro que este lugar es un refugio para nuestras adoradas mascotas. El equipo muestra un nivel de amor y respeto que va más allá de lo profesional."

    }
  ];

  public currentVetIndex: number = 0;
  public currentReviewIndex: number = 0;
  public reviewsCatImg: HTMLImageElement | null = null;
  public reviewsDataName: HTMLElement | null = null;
  public reviewsDataCat: HTMLElement | null = null;
  public reviewsText: HTMLElement | null = null;
  public reviewsInnerContainer: HTMLElement | null = null;

  ngOnInit(): void {
    // Obtener elementos del DOM al inicializar
    this.reviewsCatImg = document.getElementById("reviewsCatImg") as HTMLImageElement;
    this.reviewsDataName = document.getElementById("reviewsDataName");
    this.reviewsDataCat = document.getElementById("reviewsDataCat");
    this.reviewsText = document.getElementById("reviewsText");
    this.reviewsInnerContainer = document.getElementById("reviewsInnerContainer");

    this.displayCurrentReview();


    // Llamar a displayCurrentReview cada 5000 milisegundos (5 segundos)
    setInterval(() => {
      this.displayCurrentReview();
    }, 10000);
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

  public displayCurrentReview(): void {
    if (!this.reviewsCatImg || !this.reviewsDataName || !this.reviewsDataCat || !this.reviewsText || !this.reviewsInnerContainer) {
      return;
    }

    const currentReview = this.reviews[this.currentReviewIndex];

    this.reviewsInnerContainer.classList.add("hidden");

    setTimeout(() => {
      this.reviewsCatImg!.src = currentReview.imageSrc;
      this.reviewsDataName!.textContent = currentReview.name;
      this.reviewsDataCat!.textContent = "Dueño de " + currentReview.catName + ": " + currentReview.race;
      this.reviewsText!.textContent = currentReview.review;

      this.reviewsInnerContainer!.classList.remove("hidden");
    }, 5000);
    console.log("cambiando de vista");

    // Move to the next review index
    this.currentReviewIndex = (this.currentReviewIndex + 1) % this.reviews.length;
    console.log("cambio de vista");
  }

}
