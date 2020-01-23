import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patientservice/patient.service';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../models/patient';

@Component({
  selector: 'app-patientcard',
  templateUrl: './patientcard.component.html',
  styleUrls: ['./patientcard.component.scss']
})
export class PatientcardComponent implements OnInit {

  private patient: Patient;
  constructor(private patientService: PatientService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.patientService.getPatientList().subscribe(data => {this.patient = data; console.log(this.patient.address)});
  }

}
