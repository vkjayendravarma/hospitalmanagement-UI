import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FrontdeskService {

  constructor(private http: HttpClient) { }

  newPatient(data):Observable<any>{
    return this.http.post(`${environment.api}/reception/patients/new`, data)
  }
  allPatients():Observable <any>{
    return this.http.get(`${environment.api}/reception/patients`)
  }
  patientInfo(patientID): Observable<any>{
    return this.http.get(`${environment.api}/reception/patients/individual/${patientID}`)
  }

  updatePatient(patientId, data): Observable <any>{
    return this.http.post(`${environment.api}/reception/patients/individual/${patientId}`, data)
  }
  
  dischargePatient(patientId): Observable <any>{
    return this.http.put(`${environment.api}/reception/patients/individual/${patientId}`, null)
  }
  deletePatient(patientId): Observable <any> {
    return this.http.delete(`${environment.api}/reception/patients/individual/${patientId}`)
  }
}
