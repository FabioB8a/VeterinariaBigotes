import {Component, Input} from '@angular/core';
import {Veterinarian} from "../../model/veterinarian/veterinarian";
import {VetService} from "../../services/vet/vet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Treatment} from "../../model/treatment/treatment";
import {TreatmentService} from "../../services/treatment/treatment.service";

@Component({
  selector: 'app-vet-details',
  templateUrl: './vet-details.component.html',
  styleUrls: ['./vet-details.component.css']
})
export class VetDetailsComponent {
  @Input() vet!: Veterinarian;
  @Input() userType: string = '';
  treatmentList: Treatment[] = [];

    constructor(
        private vetService: VetService,
        private treatmentService: TreatmentService,
        private route: ActivatedRoute,
        private router: Router
    ) {
    }

    ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        this.userType = params['type'].toString();
      });
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.vetService.findById(id).subscribe((data) => {
        this.vet = new Veterinarian(data.id, data.idCard, data.firstName, data.firstLastName, data.secondLastName, data.password, data.speciality, data.imgUrl, data.status, data.entryDate);
        console.log(this.vet);
      });
        this.treatmentService.showTreatmentbyVet(id).subscribe((data) => {
            this.treatmentList = data;
            console.log(this.treatmentList);
        });
    }

}
