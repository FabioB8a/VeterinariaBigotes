import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Veterinarian } from 'src/app/model/veterinarian/veterinarian';
import { VetService } from 'src/app/services/vet/vet.service';

@Component({
  selector: 'app-vet-form',
  templateUrl: './vet-form.component.html',
  styleUrls: ['./vet-form.component.css']
})
export class VetFormComponent {

  constructor(private vetService: VetService, private route: ActivatedRoute) { }
  sendVet!: Veterinarian;

  formVet: any = {};

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if ('ownerId' in params) {
        const ownerId = Number(params['vetId']);
        this.vetService.findById(ownerId).subscribe(
          data => this.formVet = new Veterinarian(data.id, data.idCard, data.firstName, data.firstLastName, data.secondLastName, data.password, data.speciality, data.imgUrl)
        );
      }
    });
  }

  saveVet() {
      this.sendVet = Object.assign({}, this.formVet);
      this.vetService.addOwner(this.formVet);
  }
}
