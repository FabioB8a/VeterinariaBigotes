import {Component, Input} from '@angular/core';
import {Owner} from "../../model/owner/owner";
import {OwnerService} from "../../services/owner/owner.service";
import {ActivatedRoute} from "@angular/router";
import {query} from "@angular/animations";


@Component({
  selector: 'app-owner-table',
  templateUrl: './owner-table.component.html',
  styleUrls: ['./owner-table.component.css']
})
export class OwnerTableComponent {

  selectedOwner!: Owner;
  ownerList!: Owner[];
  @Input() userType: string = '';
  @Input() vetId: string = '';

  constructor(
    private ownerService: OwnerService,
    private route: ActivatedRoute
  ) {
  }

  filterText: string = '';
  isNameFilterActive: boolean = false;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if ('id' in params) {
        this.vetId = params['id'].toString();
      }
      if ('type' in params) {

        this.userType = params['type'].toString();
      }
    });
    this.ownerService.findAll().subscribe(
      data => this.ownerList = data.map(x => Object.assign(new Owner(x.id, x.idCard, x.firstName, x.firstLastName, x.secondLastName, x.phone, x.email), x))
    )
  }

  filterOwnersByName() {
    if (this.isNameFilterActive) {
      return this.ownerList.filter(owner => owner.firstName.toLowerCase().includes(this.filterText.toLowerCase()));

    } else {
      return this.ownerList;
    }
  }

  deleteById(owner: Owner): void {
    const index = this.ownerList.indexOf(owner);
    this.ownerList.splice(index, 1);
    this.ownerService.deleteById(owner.id);
  }

  protected readonly query = query;
}
