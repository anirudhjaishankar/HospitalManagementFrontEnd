import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patientservice/patient.service';
import { ActivatedRoute } from '@angular/router';
import { ResponseObject } from '../models/responseobject';
import { Patient } from '../models/patient';


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  response: ResponseObject<Patient[]>;
  patientList : Patient[];

  constructor(private patientService : PatientService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.patientService.getPatientList().subscribe(data => {
      this.response = data;
      this.patientList = this.response.data;
    });
  }

}
