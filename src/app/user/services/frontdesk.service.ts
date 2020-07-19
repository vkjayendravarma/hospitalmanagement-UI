import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FrontdeskService {

 
  
  constructor(private http: HttpClient) { }

  newPatient(data):Observable<any>{   
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'Authorization': window.localStorage.getItem('token')
      })
    }
    return this.http.post(`${environment.api}/reception/patients/new`,data, httpOptions)
  }
  allPatients():Observable <any>{
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'Authorization': window.localStorage.getItem('token')
      })
    }
    return this.http.get(`${environment.api}/reception/patients`, httpOptions)
  }
  patientInfo(patientID): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'Authorization': window.localStorage.getItem('token')
      })
    }    
    return this.http.get(`${environment.api}/reception/patients/individual/${patientID}`,httpOptions)
  }

  updatePatient(patientId, data): Observable <any>{
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'Authorization': window.localStorage.getItem('token')
      })
    }
    return this.http.post(`${environment.api}/reception/patients/individual/${patientId}`,data,httpOptions)
  }
  
  dischargePatient(patientId): Observable <any>{
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'Authorization': window.localStorage.getItem('token')
      })
    }
    return this.http.put(`${environment.api}/reception/patients/individual/${patientId}`, null,httpOptions)
  }
  deletePatient(patientId): Observable <any> {
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'Authorization': window.localStorage.getItem('token')
      })
    }
    return this.http.delete(`${environment.api}/reception/patients/individual/${patientId}`,httpOptions)
  }
}
