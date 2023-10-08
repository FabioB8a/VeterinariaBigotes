import { Component } from '@angular/core';
import {Owner} from "../../model/owner/owner";
import {OwnerService} from "../../services/owner/owner.service";

@Component({
  selector: 'app-owner-table',
  templateUrl: './owner-table.component.html',
  styleUrls: ['./owner-table.component.css']
})
export class OwnerTableComponent {

  selectedOwner!: Owner;
  ownerList!: Owner[];

  constructor(
    private ownerService: OwnerService
  ) {}

  ngOnInit(): void {
    this.ownerService.findAll().subscribe(
      data => this.ownerList = data.map(x => Object.assign(new Owner(x.id, x.idCard, x.firstName,x.firstLastName, x.secondLastName,x.phone,x.email), x))
    )
  }


  deleteById(owner:Owner):void{
    const index = this.ownerList.indexOf(owner);
    this.ownerList.splice(index,1);
    this.ownerService.deleteById(owner.id);
  }
}
