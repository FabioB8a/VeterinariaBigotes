import {Component, Input} from '@angular/core';
import {Pet} from "../../model/pet/pet";
import {PetService} from "../../services/pet/pet.service";
import {UserService} from "../../services/user/UserService";
import { ActivatedRoute } from '@angular/router';

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

        //
        this.userType = this.userService.getUserType();
        //localStorage == coockies
        let type =  localStorage.getItem('userType');
        


        if (type == 'vet') {
            this.userType = 'vet';
            this.petService.findAll().subscribe(
                data => this.petList = data.map(x => Object.assign(new Pet(x.id, x.name, x.breed, x.birthdate, x.weight, x.disease, x.imgUrl, x.owner), x))
            );
        } else if (type == 'user') {
            this.userType = 'user';
            this.route.queryParams.subscribe(params => {
                const userId = params['id'].toString();
                
                this.petService.findByOwner(userId).subscribe(
                    data => this.petList = data.map(x => Object.assign(new Pet(x.id, x.name, x.breed, x.birthdate, x.weight, x.disease, x.imgUrl, x.owner), x))
                );
            });
        }
        else {
            localStorage.setItem('userType',this.userType);
        }

        

    }

    // Correcciones posteriores
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
}
