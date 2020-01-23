import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctorservice/doctor.service';

@Component({
  selector: 'app-doctorcard',
  templateUrl: './doctorcard.component.html',
  styleUrls: ['./doctorcard.component.scss']
})
export class DoctorcardComponent implements OnInit {

  doctorList : any = [];

  constructor(private doctorService : DoctorService) { }

  ngOnInit() {
    this.doctorService.getDoctorList().subscribe(data=> this.doctorList = data);
  }

}
