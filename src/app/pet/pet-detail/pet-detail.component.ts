import {Component, Input, OnInit} from '@angular/core';
import {Pet} from "../../model/pet/pet";
import {ActivatedRoute, Router} from "@angular/router";
import {PetService} from "../../services/pet/pet.service";
import {Drug} from "../../model/drug/drug";
import {DrugService} from "../../services/drug/drug.service";
import {TreatmentService} from "../../services/treatment/treatment.service";
import {Treatment} from "../../model/treatment/treatment";
import {Veterinarian} from "../../model/veterinarian/veterinarian";
import {VetService} from "../../services/vet/vet.service";

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {

  @Input() pet?: Pet;
  @Input() userType: string = '';
  drugList: Drug[] = [];
  selectedDrug?: Drug | null;
  description: string = '';
  veterinarian?: Veterinarian;
  treatmentList: Treatment[] = []; // Lista de tratamientos
  @Input() vetId: string = '';
  id: number = 0;

  constructor(
    private drugService: DrugService,
    private treatmentService: TreatmentService,
    private vetService: VetService,
    private petService: PetService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.petService.findById(this.id).subscribe((data) => {
      this.pet = new Pet(data.id, data.name, data.breed, data.birthdate, data.weight, data.disease, data.imgUrl, data.owner);
      this.treatmentService.showTreatmentbyPet(this.pet.id).subscribe((data) => {
        this.treatmentList = data;
      });
    });
    this.route.queryParams.subscribe(params => {
      this.userType = params['type'].toString();
      this.vetId = params['id'].toString();
    });
    if (this.vetId) {
      this.vetService.findByIdCard(Number(this.vetId)).subscribe((data) => {
        this.veterinarian = data;
      });
    }
    this.drugService.findDrugsAvailabale().subscribe((data) => {
      this.drugList = data;
    });

  }

  agregarMedicamento() {
    if (this.selectedDrug && this.description !== '' && this.pet && this.veterinarian) {
      const newTreatment: Treatment = {
        id: 0,
        date: new Date(),
        pet: this.pet,
        drug: this.selectedDrug,
        veterinarian: this.veterinarian,
        description: this.description
      };
      const drugId = this.selectedDrug.id;
      this.treatmentService.addTreatment(newTreatment);
      // Update the drug's itemsAvailable

      // @ts-ignore
      this.selectedDrug.itemsAvailable -= 1;
      // @ts-ignore
      this.selectedDrug.itemsSell += 1;
      this.drugService.updateDrug(this.selectedDrug);
      // Update the treatmentList after adding a treatment
      this.treatmentList.push(newTreatment);

      // Reset the selected drug and description
      this.selectedDrug = null;
      this.description = '';

    } else {
      alert("Por favor, rellene todos los campos");
    }
  }

}
