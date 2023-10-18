import {Component, Input} from '@angular/core';
import { Veterinarian } from 'src/app/model/veterinarian/veterinarian';
import { VetService } from 'src/app/services/vet/vet.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-vet-table',
  templateUrl: './vet-table.component.html',
  styleUrls: ['./vet-table.component.css']
})
export class VetTableComponent {

  vetList!: Veterinarian[];
  filterText: string = '';
  isNameFilterActive: boolean = false;
  userType: string = '';

  constructor(
    private vetService: VetService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userType="admin";
    this.vetService.findAll().subscribe(
      data => {
        this.vetList = data.map(x => Object.assign(new Veterinarian(x.id, x.idCard, x.firstName, x.firstLastName, x.secondLastName, x.password, x.speciality, x.imgUrl), x));
        console.log(this.vetList);
      }
    );
  }

  filterVetsByName(){
    if(this.isNameFilterActive){
      return this.vetList.filter(vet => vet.firstName.toLowerCase().includes(this.filterText.toLowerCase()));

    } else {
      return this.vetList;
    }
  }

  deleteById(vet:Veterinarian):void{
    const index = this.vetList.indexOf(vet);
    this.vetList.splice(index,1);
    this.vetService.deleteById(vet.id);
  }

}
