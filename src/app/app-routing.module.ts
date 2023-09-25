import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PetTableComponent} from "./pet/pet-table/pet-table.component";
import {PetDetailComponent} from "./pet/pet-detail/pet-detail.component";
import { PetFormComponent } from './pet/pet-form/pet-form.component';
import { LogInComponent } from './log-in/log-in.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path: 'home', component: LandingComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'pet/all', component: PetTableComponent },
  { path : 'pet/detail/:id', component : PetDetailComponent},
  { path: 'pet/save', component: PetFormComponent},
  { path: 'login/show', component: LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
