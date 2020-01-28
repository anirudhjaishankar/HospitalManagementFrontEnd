import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../models/patient';

@Component({
  selector: 'app-patientcard',
  templateUrl: './patientcard.component.html',
  styleUrls: ['./patientcard.component.scss']
})
export class PatientcardComponent implements OnInit {

  @Input() patient: Patient;
  constructor() { }

  ngOnInit() {
  }

}
