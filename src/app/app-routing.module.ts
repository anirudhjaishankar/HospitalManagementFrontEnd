import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatagalleryoverlayComponent } from './datagalleryoverlay/datagalleryoverlay.component'; 
import { LoginformComponent } from './loginform/loginform.component';
import { PatientcardComponent } from './patientcard/patientcard.component';
import { DoctorcardComponent } from './doctorcard/doctorcard.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
