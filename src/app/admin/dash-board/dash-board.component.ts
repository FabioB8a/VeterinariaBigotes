import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DrugService} from "../../services/drug/drug.service";
import {TreatmentService} from "../../services/treatment/treatment.service";
import {VetService} from "../../services/vet/vet.service";
import {PetService} from "../../services/pet/pet.service";
import {Drug} from "../../model/drug/drug";
import {datepickerAnimation} from "ngx-bootstrap/datepicker/datepicker-animations";

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})

export class DashBoardComponent {

  drugListByMonth!: Drug[];
  top3DrugList!: Drug[];


  constructor(
    private http: HttpClient,
    private drugService: DrugService,
    private treatmentService: TreatmentService,
    private vetService: VetService,
    private petService: PetService
  ) { }

  ngOnInit() {
    this.drugService.getTreatmentByMonth().subscribe(data => {
      this.drugListByMonth = data.map(x => Object.assign(new Object(x)));
      console.log(this.drugListByMonth);
    });
  }
}
