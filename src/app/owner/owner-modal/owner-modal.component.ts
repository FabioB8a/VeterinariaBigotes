import {Component, Input} from '@angular/core';
import {Owner} from "../../model/owner/owner";
import {SwitchService} from "../../services/switch.service";
import {OwnerService} from "../../services/owner/owner.service";

@Component({
  selector: 'app-owner-modal',
  templateUrl: './owner-modal.component.html',
  styleUrls: ['./owner-modal.component.css']
})
export class OwnerModalComponent {
  @Input() userType: string = '';
  formOwner: Owner = {id: 0, idCard: 0, firstName: '', firstLastName: '', secondLastName: '', phone: '', email: '', pets: []};
  sendOwner!: Owner;

  isIdCardRepeated: boolean = false;

  constructor(
    private modalOS: SwitchService,
    private ownerService: OwnerService,
  ) {
  }
  ngOnInit(): void {
    console.log("el user type es", this.userType);

  }
  closeModal() {
    this.modalOS.$ownerModal.emit(false);
  }
  saveOwner() {
    if (!this.verifyForm()) {
      return;
    }
    this.sendOwner = Object.assign({}, this.formOwner);
    if (this.sendOwner.id == 0) {
      if (this.formOwner.idCard) {
        this.ownerService.ownerExists(this.sendOwner.idCard).subscribe(exists => {
          if (exists) {
            this.isIdCardRepeated = true;
          } else {
            console.log("Entramos por aqui")
            this.isIdCardRepeated = false;
            //poner tiempo para que se pueda reflejar que se guardo en el componente de vet table
            this.ownerService.addOwner(this.sendOwner);
            setTimeout(() => {
              this.closeModal();
            }, 1000);
          }
        });
      } else {
        // Clear the error when ID card is empty
        this.isIdCardRepeated = false;
      }
    }
  }

  verifyForm() {
    if (!this.formOwner.firstName) {
      alert("El campo nombre es obligatorio.");
      return false;
    }

    if (!this.formOwner.firstLastName) {
      alert("El primer apellido es obligatorio.");
      return false;
    }

    if (!this.formOwner.secondLastName) {
      alert("El segundo apellido es obligatorio.");
      return false;
    }

    if (!this.formOwner.idCard || isNaN(this.formOwner.idCard)) {
      alert("El número de cédula es obligatorio y debe ser un número.");
      return false;
    }

    if (!this.formOwner.phone || isNaN(Number(this.formOwner.phone))) {
      alert("El número de teléfono es obligatorio y debe ser un número.");
      return false;
    }

    if (!this.formOwner.email || !this.isValidEmail(this.formOwner.email)) {
      alert("El correo electrónico es obligatorio y debe ser un correo válido.");
      return false;
    }

    return true;
  }

  isValidEmail(email: string): boolean {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
