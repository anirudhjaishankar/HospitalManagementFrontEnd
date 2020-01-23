import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private jsonUrl: String;
  private patientList: any = [];

  constructor(private httpClinet: HttpClient) { 
    this.httpClinet.get('assets/patients.json').subscribe(data=> this.patientList = data);
  }

  public setJsonUrl(url: String): void {
    this.jsonUrl = url;
  }

  public getPatientList(): any{
    return this.patientList;
  }
}
