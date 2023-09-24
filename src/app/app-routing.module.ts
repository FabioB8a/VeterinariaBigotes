import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PetTableComponent} from "./pet/pet-table/pet-table.component";

const routes: Routes = [
  { path: 'pet/all', component: PetTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
