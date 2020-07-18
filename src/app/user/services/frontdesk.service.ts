import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FrontdeskService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      'Authorization': window.localStorage.getItem('token')
    })
  }
  
  constructor(private http: HttpClient) { }

  newPatient(data):Observable<any>{   
    return this.http.post(`${environment.api}/reception/patients/new`,data, this.httpOptions)
  }
  allPatients():Observable <any>{
    return this.http.get(`${environment.api}/reception/patients`, this.httpOptions)
  }
  patientInfo(patientID): Observable<any>{
    console.log(patientID);    
    return this.http.get(`${environment.api}/reception/patients/individual/${patientID}`,this.httpOptions)
  }

  updatePatient(patientId, data): Observable <any>{
    return this.http.post(`${environment.api}/reception/patients/individual/${patientId}`,data,this.httpOptions)
  }
  
  dischargePatient(patientId): Observable <any>{
    return this.http.put(`${environment.api}/reception/patients/individual/${patientId}`, null,this.httpOptions)
  }
  deletePatient(patientId): Observable <any> {
    return this.http.delete(`${environment.api}/reception/patients/individual/${patientId}`,this.httpOptions)
  }
}
