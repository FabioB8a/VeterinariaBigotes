import {Component, OnInit} from '@angular/core';
import {SwitchService} from "../../services/switch.service";
import {VetService} from "../../services/vet/vet.service";
import {Veterinarian} from "../../model/veterinarian/veterinarian";

@Component({
    selector: 'app-vet-modal',
    templateUrl: './vet-modal.component.html',
    styleUrls: ['./vet-modal.component.css']
})
export class VetModalComponent implements OnInit {

    formVet: Veterinarian = {id: 0, idCard: 0, firstName: '', firstLastName: '', secondLastName: '', password: '', speciality: '', imgUrl: '', status: 'Activo', entryDate: new Date()};
    sendVet!: Veterinarian;

    isIdCardRepeated: boolean = false;

    constructor(
        private modalSS: SwitchService,
        private vetService: VetService,
    ) {
    }

    ngOnInit(): void {
    }

    closeModal() {
        this.modalSS.$modal.emit(false);
    }

    saveVet() {
        if (!this.verifyForm()) {
            return;
        }
        this.sendVet = Object.assign({}, this.formVet);
        if (this.sendVet.id == 0) {
            if (this.formVet.idCard) {
                this.vetService.vetExists(this.sendVet.idCard).subscribe(exists => {
                    if (exists) {
                        this.isIdCardRepeated = true;
                    } else {
                        this.isIdCardRepeated = false;
                        //poner tiempo para que se pueda reflejar que se guardo en el componente de vet table

                        this.vetService.addVet(this.sendVet);
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
        if (!this.formVet.firstName) {
            alert("El campo nombre es obligatorio.");
            return false;
        }

        if (!this.formVet.firstLastName) {
            alert("El primer apellido es obligatorio.");
            return false;
        }

        if (!this.formVet.secondLastName) {
            alert("El segundo apellido es obligatorio.");
            return false;
        }

        if (!this.formVet.idCard || isNaN(this.formVet.idCard)) {
            alert("El número de cédula es obligatorio y debe ser un número.");
            return false;
        }

        if (!this.formVet.password) {
            alert("La contraseña es obligatoria.");
            return false;
        }

        if (!this.formVet.speciality) {
            alert("La especialidad es obligatoria.");
            return false;
        }

        if (!this.formVet.imgUrl) {
            alert("La imagen es obligatoria.");
            return false;
        }

        return true;
    }

}
