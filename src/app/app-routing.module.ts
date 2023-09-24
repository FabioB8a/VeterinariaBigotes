import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PetTableComponent} from "./pet/pet-table/pet-table.component";
import {PetDetailComponent} from "./pet/pet-detail/pet-detail.component";

const routes: Routes = [
  { path: 'pet/all', component: PetTableComponent },
  { path : 'pet/detail/:id', component : PetDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
