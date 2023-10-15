import {Component, Input} from '@angular/core';
import {Pet} from "../../model/pet/pet";
import {ActivatedRoute, Router} from "@angular/router";
import {PetService} from "../../services/pet/pet.service";

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent {
  @Input()
  pet?: Pet;

  @Input()
  userType: string ='';

  constructor(
    private petService: PetService,
    private route: ActivatedRoute,
    private router: Router)
  {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log("AAAAA");
    
    this.petService.findById(id).subscribe((data) => {
      this.pet = new Pet(data.id,data.name,data.breed,data.birthdate,data.weight,data.disease,data.imgUrl,data.owner);
    });
    console.log("BBB");
    this.route.queryParams.subscribe(params => {
      this.userType = params['userType'].toString();
    });
  }
}
