import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DrugService} from "../../services/drug/drug.service";
import {TreatmentService} from "../../services/treatment/treatment.service";
import {VetService} from "../../services/vet/vet.service";
import {PetService} from "../../services/pet/pet.service";
import {Drug} from "../../model/drug/drug";

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})

export class DashBoardComponent {

  drugListByMonth!: any[];
  top3DrugList!: Drug[];
  numberOfTreatmentsByMonth!: number;
  numberOfPets!: number;
  numberOfPetsOnTreatment!: number;
  numberOfActiveVets!: number;
  numberOfInactiveVets!: number;
  totalSales!: number;
  totalProfit!: number;



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
    });

    this.drugService.getTop3Drug().subscribe(data => {
      this.top3DrugList = data.map(x => Object.assign(new Drug(x.name, <number>x.buyPrice, <number>x.sellPrice, <number>x.itemsAvailable, <number>x.itemsSell), x));
    });

    this.treatmentService.getCountTreatmentsByMonth().subscribe(data => {
      this.numberOfTreatmentsByMonth= data;
    });

    this.petService.getNumberOfPets().subscribe(data => {
      this.numberOfPets = data;
    });

    this.petService.getNumberOfPetsOnTreatment().subscribe(data => {
      this.numberOfPetsOnTreatment = data;
    });

    this.vetService.getNumberOfActiveVets().subscribe(data => {
      this.numberOfActiveVets = data;
    });

    this.vetService.getNumberOfInactiveVets().subscribe(data => {
      this.numberOfInactiveVets = data;
    });

    this.drugService.getTotalSales().subscribe(data => {
      this.totalSales = data;
    });

    this.drugService.getTotalProfit().subscribe(data => {
      this.totalProfit = data;
    });
  }
}
