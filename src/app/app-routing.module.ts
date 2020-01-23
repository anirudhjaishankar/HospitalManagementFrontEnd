import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatagalleryoverlayComponent } from './datagalleryoverlay/datagalleryoverlay.component'; 
import { LoginformComponent } from './loginform/loginform.component';
import { PatientcardComponent } from './patientcard/patientcard.component';
import { DoctorcardComponent } from './doctorcard/doctorcard.component';
import { CreatePatientFormComponent } from './create-patient-form/create-patient-form.component';
import { CreateDoctorFormComponent } from './create-doctor-form/create-doctor-form.component';


const routes: Routes = [
  {
    path:"",
    component:LoginformComponent
  },
  {
    path:'details',
    component:DatagalleryoverlayComponent,
    children:[
      {
        path:'patients',
        component:PatientcardComponent
      },
      {
        path:'doctors',
        component:DoctorcardComponent
      }
    ]
  },
  {
    path:'create',
    children:[
    {
      path:'patient',
      component:CreatePatientFormComponent
    },
    {
      path:'doctor',
      component:CreateDoctorFormComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
