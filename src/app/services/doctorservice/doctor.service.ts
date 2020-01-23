import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private jsonUrl: string = "assets/mockdata/doctors.json";
  constructor(private httpClient: HttpClient) { }

  public getDoctorList(): any {
    return this.httpClient.get(this.jsonUrl);
  }

}
