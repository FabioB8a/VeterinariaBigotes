import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetTableComponent } from './pet/pet-table/pet-table.component';
import {NgOptimizedImage} from "@angular/common";
import { LogInComponent } from './log-in/log-in.component';
import { LandingComponent } from './landing/landing.component';
import { FormsModule } from '@angular/forms';
import { OwnerTableComponent } from './owner/owner-table/owner-table.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { VetTableComponent } from './vet/vet-table/vet-table.component';
import { DashBoardComponent } from './admin/dash-board/dash-board.component';
import { AdminLogInComponent } from './admin/admin-log-in/admin-log-in.component';
import {AuthInterceptor} from "./helpers/auth.interceptor";
import { PetDetailsComponent } from './pet/pet-details/pet-details.component';
import { OwnerDetailsComponent } from './owner/owner-details/owner-details.component';
import { VetDetailsComponent } from './vet/vet-details/vet-details.component';
import { VetModalComponent } from './vet/vet-modal/vet-modal.component';
import { OwnerModalComponent } from './owner/owner-modal/owner-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PetTableComponent,
    LogInComponent,
    LandingComponent,
    OwnerTableComponent,
    VetTableComponent,
    DashBoardComponent,
    AdminLogInComponent,
    PetDetailsComponent,
    OwnerDetailsComponent,
    VetDetailsComponent,
    VetModalComponent,
    OwnerModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
