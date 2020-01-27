import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; 
import { PatientService } from '../services/patientservice/patient.service';
import { Patient } from '../models/patient';
import { Address } from '../models/address';
@Component({
  selector: 'app-create-patient-form',
  templateUrl: './create-patient-form.component.html',
  styleUrls: ['./create-patient-form.component.scss']
})
export class CreatePatientFormComponent implements OnInit {
  patient: Patient;
  createForm : FormGroup;
  address : Address;

  constructor(private formBuilder: FormBuilder, private patientService : PatientService) { }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      username:'',
      password:'',
      name:'',
      age:'',
      gender:'',
      bloodGroup:'',
      phone:''
    });
  }

  public onSubmit(patientData){
    this.patient = patientData;
    this.address  = {
      id:0,
      flatNumber: "F6",
      flatName: "blue spring",
      streetName: "st mary street ",
      areaName: "vadapalani",
      cityName: "chennai",
      stateName: "tamil nadu",
      pincode: 600060
    }
    this.patient.role = 3;
    this.patient.address = this.address;
    console.log(this.patient);
    this.patientService.createPatient(patientData).subscribe(result=>console.log(result));
    this.createForm.reset();
  }

}
