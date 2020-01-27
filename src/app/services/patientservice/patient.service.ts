import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Patient } from '../../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private readUrl: string = "http://localhost:8080/patients/read/4";
  private createUrl: string ="http://localhost:8080/patients/create";

  constructor(private httpClient: HttpClient) {
  }
  
  public getPatientList(): Observable<Patient> {
    return this.httpClient.get<Patient>(this.readUrl);
  }

  public createPatient(patient: Patient): Observable<string>{
    return this.httpClient.post<string>(this.createUrl, patient);
  }

  // public deletePatient(patientId : Number): Observable<string>{
  //   return this.httpClient.delete<Number>(this.deleteUrl, Number.toString(patientId));
  // }
}
