import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatagalleryoverlayComponent } from './datagalleryoverlay/datagalleryoverlay.component';
import { LoginformComponent } from './loginform/loginform.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { CreatePatientFormComponent } from './create-patient-form/create-patient-form.component';
import { CreateDoctorFormComponent } from './create-doctor-form/create-doctor-form.component';


const routes: Routes = [
  {
    path: '',
    component: LoginformComponent
  },
  {
    path: 'details',
    component: DatagalleryoverlayComponent,
    children: [
      {
        path: 'patients',
        component: PatientListComponent
      },
      {
        path: 'doctors',
        component: DoctorListComponent
      }
    ]
  },
  {
    path: 'create',
    children: [
    {
      path: 'patient',
      component: CreatePatientFormComponent
    },
    {
      path: 'doctor',
      component: CreateDoctorFormComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
