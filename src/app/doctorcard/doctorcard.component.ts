import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from '../models/doctor';
import { DoctorService } from '../services/doctorservice/doctor.service'; 

@Component({
  selector: 'app-doctorcard',
  templateUrl: './doctorcard.component.html',
  styleUrls: ['./doctorcard.component.scss']
})
export class DoctorcardComponent implements OnInit {

  @Input() doctor: Doctor;

  constructor(private doctorService : DoctorService) { }

  ngOnInit() {
    
  }

}
