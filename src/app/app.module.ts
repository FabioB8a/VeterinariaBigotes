import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetTableComponent } from './pet/pet-table/pet-table.component';
import { PetDetailsComponent } from './pet/pet-details/pet-details.component';
import { PetDetailComponent } from './pet/pet-detail/pet-detail.component';
import { PetFormComponent } from './pet/pet-form/pet-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PetTableComponent,
    PetDetailsComponent,
    PetDetailComponent,
    PetFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
