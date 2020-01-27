import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginformComponent } from './loginform/loginform.component';
import { DatagalleryoverlayComponent } from './datagalleryoverlay/datagalleryoverlay.component';
import { DoctorcardComponent } from './doctorcard/doctorcard.component';
import { PatientcardComponent } from './patientcard/patientcard.component';
import { CreatePatientFormComponent } from './create-patient-form/create-patient-form.component';
import { CreateDoctorFormComponent } from './create-doctor-form/create-doctor-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginformComponent,
    DatagalleryoverlayComponent,
    DoctorcardComponent,
    PatientcardComponent,
    CreatePatientFormComponent,
    CreateDoctorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
