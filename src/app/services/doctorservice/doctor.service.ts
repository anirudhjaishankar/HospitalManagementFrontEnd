import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private jsonUrl: String;
  private doctorList: any = [];
  constructor(private httpClient: HttpClient) {
    this.httpClient.get('assets/mockdata/doctors.json').subscribe(data=> this.doctorList = data);
  }

  public getDoctorList(): any {
    return this.doctorList;
  }

  public setJsonUrl(url: String): void {
    this.jsonUrl = url;
  }


}
