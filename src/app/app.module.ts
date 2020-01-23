import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginformComponent } from './loginform/loginform.component';
import { DatagalleryoverlayComponent } from './datagalleryoverlay/datagalleryoverlay.component';
import { DoctorcardComponent } from './doctorcard/doctorcard.component';
import { PatientcardComponent } from './patientcard/patientcard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginformComponent,
    DatagalleryoverlayComponent,
    DoctorcardComponent,
    PatientcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
