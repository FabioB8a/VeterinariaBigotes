import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinarian } from 'src/app/model/veterinarian/veterinarian';
import { VetService } from 'src/app/services/vet/vet.service';

@Component({
  selector: 'app-vet-detail',
  templateUrl: './vet-detail.component.html',
  styleUrls: ['./vet-detail.component.css']
})
export class VetDetailComponent {

  @Input()
  vet!: Veterinarian;

  constructor(
    private vetService: VetService,
    private route: ActivatedRoute,
    private router: Router)
  {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vetService.findById(id).subscribe((data) => {
      this.vet = new Veterinarian(data.id, data.idCard, data.firstName, data.firstLastName, data.secondLastName, data.password, data.speciality, data.imgUrl);
    });
  }
}
