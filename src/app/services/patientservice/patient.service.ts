import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Patient } from '../../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private readUrl: string = "http://localhost:8080/patients/readAllPatients";
  private readIdUrl: string = "http:..localhost:8080/patients/read/" 
  private createUrl: string ="http://localhost:8080/patients/create";
  private deleteUrl: string = "http://localhost:8080/patients/delete/";
  private updateUrl: string = "http://localhost:8080/patients/update;"

  constructor(private httpClient: HttpClient) {
  }

  public getPatient(patientId: Number): Observable<Patient>{
    return this.httpClient.get<Patient>(this.readIdUrl+patientId);
  }
  
  public getPatientList(): Observable<Patient> {
    return this.httpClient.get<Patient>(this.readUrl);
  }

  public createPatient(patient: Patient): Observable<string>{
    return this.httpClient.post<string>(this.createUrl, patient);
  }
  public updatePatient(updatedPatient : Patient): Observable<string>{
    return this.httpClient.put<string>(this.updateUrl, updatedPatient);
  }

  public deletePatient(patientId : Number): Observable<Number>{
    return this.httpClient.delete<Number>(this.deleteUrl);
  }
}
