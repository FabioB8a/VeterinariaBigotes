import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Veterinarian} from 'src/app/model/veterinarian/veterinarian';
import {VetService} from 'src/app/services/vet/vet.service';

@Component({
  selector: 'app-vet-form',
  templateUrl: './vet-form.component.html',
  styleUrls: ['./vet-form.component.css']
})
export class VetFormComponent {
  @Input() userType: string = '';

  constructor(private vetService: VetService, private route: ActivatedRoute, private router: Router) {
  }

  sendVet!: Veterinarian;

  formVet: any = {};


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userType = params['type'].toString();
      if ('vetId' in params) {
        const ownerId = Number(params['vetId']);
        this.vetService.findById(ownerId).subscribe(
          data => this.formVet = new Veterinarian(data.id, data.idCard, data.firstName, data.firstLastName, data.secondLastName, data.password, data.speciality, data.imgUrl, data.status)
        );
      }
    });
  }

  saveVet() {
    // Validar que todos los campos estén llenos
    if (!this.verifyForm()) {
      return;
    }

    // Se crea un objeto de tipo Veterinarian con los datos del formulario
    this.sendVet = Object.assign({}, this.formVet);

    // Se verifica que si el id es null, no exista un veterinario con el mismo idCard en la base de datos
    if (this.sendVet.id == null) {
      this.vetService.vetExists(this.sendVet.idCard).subscribe(exists => {
        if (exists) {
          alert("Ya existe un veterinario con el mismo número de cédula");
        } else {
          // Si el id es diferente de null se añade el veterinario a la base de datos
          this.vetService.addVet(this.sendVet);
          this.router.navigate(['/vet/all']);
        }
      });
    }
    // Si el id no es null se actualiza el veterinario en la base de datos
    else {
      this.vetService.updateVet(this.sendVet);
      this.router.navigate(['/vet/all']);
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
