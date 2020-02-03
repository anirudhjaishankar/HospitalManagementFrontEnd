import { Component, OnInit } from '@angular/core';
import { Doctor } from '../models/doctor';
import { DoctorService } from '../services/doctorservice/doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {
  
  doctorList : Doctor[];
  constructor(private doctorService : DoctorService) { }

  ngOnInit() {
    this.doctorService.getDoctorList().subscribe(response=> this.doctorList = response.data);
  }

}
