import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetTableComponent } from './pet/pet-table/pet-table.component';
import { PetDetailComponent } from './pet/pet-detail/pet-detail.component';
import { PetFormComponent } from './pet/pet-form/pet-form.component';
import {NgOptimizedImage} from "@angular/common";
import { LogInComponent } from './log-in/log-in.component';
import { LandingComponent } from './landing/landing.component';
import { FormsModule } from '@angular/forms';
import { OwnerDetailComponent } from './owner/owner-detail/owner-detail.component';
import { OwnerFormComponent } from './owner/owner-form/owner-form.component';
import { OwnerTableComponent } from './owner/owner-table/owner-table.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { VetFormComponent } from './vet/vet-form/vet-form.component';
import { VetDetailComponent } from './vet/vet-detail/vet-detail.component';
import { VetTableComponent } from './vet/vet-table/vet-table.component';
import { DashBoardComponent } from './admin/dash-board/dash-board.component';
import { AdminLogInComponent } from './admin/admin-log-in/admin-log-in.component';
import {AuthInterceptor} from "./helpers/auth.interceptor";
import { PetDetailsComponent } from './pet/pet-details/pet-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PetTableComponent,
    PetDetailComponent,
    PetFormComponent,
    LogInComponent,
    LandingComponent,
    OwnerDetailComponent,
    OwnerFormComponent,
    OwnerTableComponent,
    VetFormComponent,
    VetDetailComponent,
    VetTableComponent,
    DashBoardComponent,
    AdminLogInComponent,
    PetDetailsComponent
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
