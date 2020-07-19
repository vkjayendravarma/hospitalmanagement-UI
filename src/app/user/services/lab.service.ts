import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { env } from 'process';

@Injectable({
  providedIn: 'root'
})
export class LabService {


  constructor(private http: HttpClient) { }

  getInventory(): Observable <any>{
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'Authorization': window.localStorage.getItem('token')
      })
    }
    return this.http.get(`${environment.api}/lab/inventory/manageinventory`,httpOptions)
  }

  newTest(newTest): Observable <any>{
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'Authorization': window.localStorage.getItem('token')
      })
    }
    return this.http.post(`${environment.api}/lab/inventory/manageinventory`, newTest,httpOptions)
  }
  getPatientData(patientId): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'Authorization': window.localStorage.getItem('token')
      })
    }
    return this.http.get(`${environment.api}/lab/patient/getpatientdata/${patientId}`,httpOptions)
  }

  newInvoice(patientId, items): Observable <any>{
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'Authorization': window.localStorage.getItem('token')
      })
    }
    return this.http.post(`${environment.api}/lab/patient/newinvoice/${patientId}`, {items: items},httpOptions)
  }
}
