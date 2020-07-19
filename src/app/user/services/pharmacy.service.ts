import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PharmacyService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': window.localStorage.getItem('token')
    })
  }

  constructor(private htttp: HttpClient) { }

  getPatientData(patientId): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'Authorization': window.localStorage.getItem('token')
      })
    }
    return this.htttp.get(`${environment.api}/pharmacy/patient/getpatientdata/${patientId}`,httpOptions)
  }

  newInventoryItem(newMedicine): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'Authorization': window.localStorage.getItem('token')
      })
    }
    return this.htttp.post(`${environment.api}/pharmacy/inventory/manageinventory`, newMedicine,httpOptions)
  }

  getInventory(): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'Authorization': window.localStorage.getItem('token')
      })
    }
    return this.htttp.get(`${environment.api}/pharmacy/inventory/manageinventory`,httpOptions)
  }
  addSku(id,qty): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'Authorization': window.localStorage.getItem('token')
      })
    }
    return this.htttp.put(`${environment.api}/pharmacy/inventory/manageinventory/${id}`,qty,httpOptions)
  } 
  
  newInvoice({ patienId, items }: { patienId; items; }): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'Authorization': window.localStorage.getItem('token')
      })
    }
    return this.htttp.post(`${environment.api}/pharmacy/patient/newinvoice/${patienId}`, items,httpOptions)
  }
}
