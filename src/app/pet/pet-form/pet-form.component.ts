import { Component } from '@angular/core';
import { Pet } from 'src/app/model/pet/pet';
import {PetService} from "../../services/pet/pet.service";
import {OwnerService} from "../../services/owner/owner.service";
import {ActivatedRoute, Router} from '@angular/router';
import {merge, mergeMap} from "rxjs";

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent {

    constructor(private petService: PetService, private ownerService: OwnerService, private route: ActivatedRoute, private router: Router) {
    }

    sendPet!: Pet;

    formPet!: Pet


    ngOnInit() {
        this.route.queryParams.pipe(
            mergeMap((params: { [x: string]: any; }) => {
                if ('petId' in params) {
                    const petId = Number(params['petId']);

                    const petObservable$ = this.petService.findById(petId).pipe(
                        mergeMap(data => {
                            this.formPet = new Pet(data.id, data.name, data.breed, data.birthdate, data.weight, data.disease, data.imgUrl, data.owner);
                            return this.ownerService.findOwnerByPets_Id(petId);
                        })
                    );

                    const ownerObservable$ = this.ownerService.findOwnerByPets_Id(petId).pipe(
                        mergeMap(owner => {
                            this.formPet.owner = owner;
                            return [];
                        })
                    );

                    return merge(petObservable$, ownerObservable$);
                }
                return [];
            })
        ).subscribe();
    }


    savePet() {
        if (!this.verifyForm()) {
            return;
        }
        this.ownerService.ownerExistsByIdCard(this.formPet.owner.idCard).subscribe(exists => {
            if (exists) {
                this.sendPet = Object.assign({}, this.formPet);
                this.petService.addPet(this.sendPet);
                this.router.navigate(['/pet/all'], {queryParams: {type: 'vet'}});
            } else {
                alert("No existe un dueño con el número de cédula ingresado");
            }
        });
    }


    verifyForm() {
        if (!this.formPet.name) {
            alert("El campo nombre es obligatorio");
            return false;
        }
        if (!this.formPet.breed) {
            alert("El campo raza es obligatorio");
            return false;
        }

        if (!this.formPet.birthdate || !this.verifyDate()) {
            alert("El campo fecha de nacimiento es obligatoria y debe ser menor a la fecha actual");
            return false;
        }

        if (!this.formPet.weight) {
            alert("El campo peso es obligatorio");
            return false;
        }

        if (!this.formPet.disease) {
            alert("El campo enfermedad es obligatorio");
            return false;
        }

        if (!this.formPet.imgUrl) {
            alert("El campo imagen es obligatorio");
            return false;
        }

        if (!this.formPet.owner) {
            alert("La cédula del dueño es obligatoria");
            return false;
        }

        return true;
    }

    verifyDate() {
        let today = new Date();
        let birthdate = new Date(this.formPet.birthdate);
        return birthdate <= today;
    }

}
