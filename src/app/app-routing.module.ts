import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PetTableComponent} from "./pet/pet-table/pet-table.component";
import { LogInComponent } from './log-in/log-in.component';
import { LandingComponent } from './landing/landing.component';
import {OwnerTableComponent} from "./owner/owner-table/owner-table.component";
import { VetTableComponent } from './vet/vet-table/vet-table.component';
import { DashBoardComponent} from "./admin/dash-board/dash-board.component";
import { AdminLogInComponent} from "./admin/admin-log-in/admin-log-in.component";
import {PetDetailsComponent} from "./pet/pet-details/pet-details.component";
import {OwnerDetailsComponent} from "./owner/owner-details/owner-details.component";
import {VetDetailsComponent} from "./vet/vet-details/vet-details.component";

const routes: Routes = [
  {path: 'home', component: LandingComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'pet/all', component: PetTableComponent },
  {path: 'owner/all', component: OwnerTableComponent},
  {path: 'vet/all', component: VetTableComponent},
  { path: 'login/show', component: LogInComponent},
  { path: 'admin/dashboard', component: DashBoardComponent},
  { path: 'admin/login', component: AdminLogInComponent},
  { path: 'pet/detail/:id', component: PetDetailsComponent},
  {path: 'owner/detail/:id', component: OwnerDetailsComponent},
  {path: 'vet/detail/:id', component: VetDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
