import {Component, Input} from '@angular/core';
import {Pet} from "../../model/pet/pet";
import {PetService} from "../../services/pet/pet.service";
import {UserService} from "../../services/user/UserService";
import { ActivatedRoute } from '@angular/router';
import {query} from "@angular/animations";

@Component({
    selector: 'app-pet-table',
    templateUrl: './pet-table.component.html',
    styleUrls: ['./pet-table.component.css']
})
export class PetTableComponent {

    @Input() userType: string ='';

    selectedPet!: Pet;

    petList!: Pet[];


    constructor(
        private petService: PetService
        ,private userService: UserService
        ,private route: ActivatedRoute
    ) {

    }


    filterText: string = '';
    isNameFilterActive: boolean = false;

    ngOnChanges(): void {

    }

    ngOnInit(): void {

        this.route.queryParams.subscribe(params => {
            this.userType = params['type'].toString();
            //let type =  localStorage.getItem('userType');

            if (this.userType == 'vet') {
                //this.userType = 'vet';
                this.petService.findAll().subscribe(
                    data => this.petList = data.map(x => Object.assign(new Pet(x.id, x.name, x.breed, x.birthdate, x.weight, x.disease, x.imgUrl, x.owner), x))
                );
            } else if (this.userType == 'user') {
                //this.userType = 'user';
                const userId = params['id'].toString();

                this.petService.findByOwner(userId).subscribe(
                    data => this.petList = data.map(x => Object.assign(new Pet(x.id, x.name, x.breed, x.birthdate, x.weight, x.disease, x.imgUrl, x.owner), x))
                );
            }
            else {
                localStorage.setItem('userType',this.userType);
            }
        });
    }

    filterPetsByName() {
        if (this.isNameFilterActive) {
            return this.petList.filter(pet =>
                pet.name.toLowerCase().includes(this.filterText.toLowerCase())
            );
        } else {
            return this.petList; // If the checkbox is not active, return the full list
        }
    }

    deleteById(pet:Pet):void{
        const index = this.petList.indexOf(pet);
        this.petList.splice(index,1);
        this.petService.deleteById(pet.id);
    }

  protected readonly query = query;
  protected readonly String = String;
}
