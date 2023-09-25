import { Component } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  loginVet: HTMLElement | null = null;
  loginOwner: HTMLElement | null = null;
  formActive: HTMLElement | null = null;

  constructor() {
    // Initialize DOM elements
    this.loginVet = document.querySelector(".loginVet");
    this.loginOwner = document.querySelector(".loginOwner");
    this.formActive = document.querySelector(".container-forms");
  }

  tab1(): void {
    if (this.formActive) {
      this.formActive.style.marginLeft = "0";
    }

    if (this.loginVet) {
      this.loginVet.style.opacity = "0.7";
      const vetImage = this.loginVet.querySelector("img");
      if (vetImage) vetImage.style.opacity = "0.7";
    }

    if (this.loginOwner) {
      this.loginOwner.style.opacity = "";
      const ownerImage = this.loginOwner.querySelector("img");
      if (ownerImage) ownerImage.style.opacity = "";
    }
  }

  tab2(): void {
    if (this.formActive) {
      this.formActive.style.marginLeft = "-97%";
    }

    if (this.loginVet) {
      this.loginVet.style.opacity = "1";
      const vetImage = this.loginVet.querySelector("img");
      if (vetImage) vetImage.style.opacity = "1";
    }

    if (this.loginOwner) {
      this.loginOwner.style.opacity = "0.7";
      const ownerImage = this.loginOwner.querySelector("img");
      if (ownerImage) ownerImage.style.opacity = "0.7";
    }
  }

  onSubmit(type: string): void {
    // Handle form submission based on the type (owner or vet)
    if (type === 'owner') {
      // Handle owner form submission
    } else if (type === 'vet') {
      // Handle vet form submission
    }
  }
}
