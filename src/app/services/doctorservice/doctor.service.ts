import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseObject } from 'src/app/models/responseobject';
import { Doctor } from 'src/app/models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private readUrl: string = "localhost:4200/doctors/readAllDoctors";
  constructor(private httpClient: HttpClient) { }

  public getDoctorList():Observable<ResponseObject<Doctor[]>> {
    return this.httpClient.get<ResponseObject<Doctor[]>>(this.readUrl);
  }

}
