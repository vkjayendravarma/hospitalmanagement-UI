import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { env } from 'process';

@Injectable({
  providedIn: 'root'
})
export class LabService {
  httpOptionsLogin = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': window.localStorage.getItem('token')
    })
  }

  constructor(private http: HttpClient) { }

  getInventory(): Observable <any>{
    return this.http.get(`${environment.api}/lab/inventory/manageinventory`,this.httpOptionsLogin)
  }

  newTest(newTest): Observable <any>{
    return this.http.post(`${environment.api}/lab/inventory/manageinventory`, newTest,this.httpOptionsLogin)
  }
  getPatientData(patientId): Observable<any>{
    return this.http.get(`${environment.api}/lab/patient/getpatientdata?patientId=${patientId}`,this.httpOptionsLogin)
  }

  newInvoice(patientId, items): Observable <any>{
    return this.http.post(`${environment.api}/lab/patient/newinvoice?patientId=${patientId}`, {items: items},this.httpOptionsLogin)
  }
}
