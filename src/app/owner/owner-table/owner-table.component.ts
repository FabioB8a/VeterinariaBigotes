import {Component, Input} from '@angular/core';
import {Owner} from "../../model/owner/owner";
import {OwnerService} from "../../services/owner/owner.service";
import {ActivatedRoute, Router} from "@angular/router";
import {query} from "@angular/animations";
import {SwitchService} from "../../services/switch.service";


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
  modalSwitch: boolean = false;

  constructor(
    private ownerService: OwnerService,
    private route: ActivatedRoute,
    private router: Router,
    private modalOS:SwitchService
  ) {
  }

  filterText: string = '';
  isNameFilterActive: boolean = false;

  ngOnInit(): void {
    this.modalOS.$ownerModal.subscribe((value) => {
      this.modalSwitch = value;
      if (value === false) {
        this.ngOnInit();
      }
    });
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
      return this.ownerList.filter(owner =>
        owner.firstName.toLowerCase().includes(this.filterText.toLowerCase()));

    } else {
      return this.ownerList;
    }
  }

  deleteById(owner: Owner): void {
    const index = this.ownerList.indexOf(owner);
    this.ownerList.splice(index, 1);
    this.ownerService.deleteById(owner.id);
  }


  logOut(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    this.userType = '';
    this.vetId = '';
    this.router.navigate(['/login/show']);
  }

  openModal() {
    this.modalSwitch = true;
  }

  protected readonly query = query;
}
