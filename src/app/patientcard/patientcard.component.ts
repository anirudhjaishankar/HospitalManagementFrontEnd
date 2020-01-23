import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patientservice/patient.service';

@Component({
  selector: 'app-patientcard',
  templateUrl: './patientcard.component.html',
  styleUrls: ['./patientcard.component.scss']
})
export class PatientcardComponent implements OnInit {

  private patientList :any = [];
  constructor(private patientService:PatientService) { }

  ngOnInit() {
    this.patientList = this.patientService.getPatientList();
  }

}
