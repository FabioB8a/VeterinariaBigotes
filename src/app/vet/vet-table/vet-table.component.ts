import {Component, Input} from '@angular/core';
import { Veterinarian } from 'src/app/model/veterinarian/veterinarian';
import { VetService } from 'src/app/services/vet/vet.service';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {SwitchService} from "../../services/switch.service";

@Component({
  selector: 'app-vet-table',
  templateUrl: './vet-table.component.html',
  styleUrls: ['./vet-table.component.css']
})
export class VetTableComponent {

  vetList!: Veterinarian[];
  userType: string = '';
  modalSwitch: boolean = false;
  vetSelected!: Veterinarian;

  constructor(
    private vetService: VetService,
    private route: ActivatedRoute,
    private modalSS: SwitchService,
    private router: Router
  ) {}

  filterText: string = '';
  isNameFilterActive: boolean = false;

  ngOnInit(): void {
    this.modalSS.$modal.subscribe((value) => {
        this.modalSwitch = value;
        if (value === false) {
            this.ngOnInit();
        }
    });
    this.vetSelected = undefined!;
    this.userType="admin";
    this.vetService.findAllActiveVeterinarians().subscribe(
      data => {
        this.vetList = data.map(x => Object.assign(new Veterinarian(x.id, x.idCard, x.firstName, x.firstLastName, x.secondLastName, x.password, x.speciality, x.imgUrl, x.status, x.entryDate), x));
        console.log("la lista de veteriarios es ", this.vetList);
      }
    );
  }

  filterVetsByName(){
    if(this.isNameFilterActive){
      return this.vetList.filter(vet =>
        vet.firstName.toLowerCase().includes(this.filterText.toLowerCase()));
    } else {
      return this.vetList;
    }
  }

  deleteById(vet:Veterinarian):void{
    const index = this.vetList.indexOf(vet);
    this.vetList.splice(index,1);
    vet.status = 'Inactivo';
    this.vetService.makeInactive(vet.id);
  }

  editVet(vetId: number){
    this.vetService.getCompleteInfo(vetId).subscribe(
      data => {
        this.vetSelected = data;
        this.openModal();
      }
    );
    this.vetSelected = null!;

  }
  openModal(){
    this.modalSwitch = true;
  }

  logOut(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    this.userType = '';
    this.router.navigate(['/login/show']);
  }

  protected readonly open = open;
}
