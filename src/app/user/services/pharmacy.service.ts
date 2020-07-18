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
    return this.htttp.get(`${environment.api}/pharmacy/patient/getpatientdata/${patientId}`,this.httpOptions)
  }

  newInventoryItem(newMedicine): Observable<any>{
    return this.htttp.post(`${environment.api}/pharmacy/inventory/manageinventory`, newMedicine,this.httpOptions)
  }

  getInventory(): Observable<any>{
    return this.htttp.get(`${environment.api}/pharmacy/inventory/manageinventory`,this.httpOptions)
  }
  addSku(id,qty): Observable<any>{
    return this.htttp.put(`${environment.api}/pharmacy/inventory/manageinventory/${id}`,qty,this.httpOptions)
  } 
  
  newInvoice({ patienId, items }: { patienId; items; }): Observable<any>{
    return this.htttp.post(`${environment.api}/pharmacy/patient/newinvoice/${patienId}`, items,this.httpOptions)
  }
}
