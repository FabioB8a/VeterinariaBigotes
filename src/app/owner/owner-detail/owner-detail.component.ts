import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OwnerService} from "../../services/owner/owner.service";
import {Owner} from "../../model/owner/owner";

@Component({
  selector: 'app-owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.css']
})
export class OwnerDetailComponent {
  @Input()
  owner!: Owner;

  constructor(
    private ownerService: OwnerService,
    private route: ActivatedRoute,
    private router: Router)
  {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ownerService.findById(id).subscribe((data) => {
      this.owner = new Owner(data.id,data.idCard,data.firstName,data.firstLastName,data.secondLastName,data.phone,data.email);
    });
  }

}
