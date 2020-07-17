import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FrontdeskService {
  httpOptionsLogin = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': window.localStorage.getItem('token')
    })
  }

  constructor(private http: HttpClient) { }

  newPatient(data):Observable<any>{
    return this.http.post(`${environment.api}/reception/patients/new`, data ,this.httpOptionsLogin)
  }
  allPatients():Observable <any>{
    return this.http.get(`${environment.api}/reception/patients`,this.httpOptionsLogin)
  }
  patientInfo(patientID): Observable<any>{
    return this.http.get(`${environment.api}/reception/patients/individual/${patientID}`,this.httpOptionsLogin)
  }

  updatePatient(patientId, data): Observable <any>{
    return this.http.post(`${environment.api}/reception/patients/individual/${patientId}`, data,this.httpOptionsLogin)
  }
  
  dischargePatient(patientId): Observable <any>{
    return this.http.put(`${environment.api}/reception/patients/individual/${patientId}`, null,this.httpOptionsLogin)
  }
  deletePatient(patientId): Observable <any> {
    return this.http.delete(`${environment.api}/reception/patients/individual/${patientId}`,this.httpOptionsLogin)
  }
}
