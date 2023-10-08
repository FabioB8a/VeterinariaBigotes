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

    formOwner!: Owner;

    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        if ('ownerId' in params) {
          const ownerId = Number(params['ownerId']);
          this.ownerService.findById(ownerId).subscribe(
            data => this.formOwner = data
          );
        }
      });
    }

    saveOwner() {
        this.sendOwner = Object.assign({}, this.formOwner);
        this.ownerService.addOwner(this.formOwner);
    }

}
