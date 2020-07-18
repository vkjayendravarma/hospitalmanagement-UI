import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PharmacyService {
  httpOptionsLogin = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': window.localStorage.getItem('token')
    })
  }

  constructor(private htttp: HttpClient) { }

  getPatientData(patientId): Observable<any>{
    return this.htttp.get(`${environment.api}/pharmacy/patient/getpatientdata?patientId=${patientId}`,this.httpOptionsLogin)
  }

  newInventoryItem(newMedicine): Observable<any>{
    return this.htttp.post(`${environment.api}/pharmacy/inventory/manageinventory`, newMedicine,this.httpOptionsLogin)
  }

  getInventory(): Observable<any>{
    return this.htttp.get(`${environment.api}/pharmacy/inventory/manageinventory`,this.httpOptionsLogin)
  }
  addSku(id,qty): Observable<any>{
    return this.htttp.put(`${environment.api}/pharmacy/inventory/manageinventory?medicineID=${id}`,qty,this.httpOptionsLogin)
  } 
  
  newInvoice({ patienId, items }: { patienId; items; }): Observable<any>{
    return this.htttp.post(`${environment.api}/pharmacy/patient/newinvoice?patientID=${patienId}`, items,this.httpOptionsLogin)
  }
}
