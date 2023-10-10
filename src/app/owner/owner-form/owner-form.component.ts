import { Component } from '@angular/core';
import {Owner} from "../../model/owner/owner";
import {ActivatedRoute} from "@angular/router";
import {OwnerService} from "../../services/owner/owner.service";

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.css']
})
export class OwnerFormComponent {

  constructor(private ownerService: OwnerService, private route: ActivatedRoute) { }

    sendOwner!: Owner;

  formOwner: any = {};  // Initialize formOwner as an empty object or with default values

    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        if ('ownerId' in params) {
          const ownerId = Number(params['ownerId']);
          this.ownerService.findById(ownerId).subscribe(
            data => this.formOwner = new Owner(data.id, data.idCard, data.firstName, data.firstLastName, data.secondLastName, data.phone, data.email)
          );
        }
      });
    }

    saveOwner() {
        this.sendOwner = Object.assign({}, this.formOwner);
        this.ownerService.addOwner(this.formOwner);
    }

}
