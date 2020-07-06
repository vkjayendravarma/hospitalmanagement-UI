import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  constructor(private htttp: HttpClient) { }

  getPatientData(patientId): Observable<any>{
    return this.htttp.get(`${environment.api}/pharmacy/patient/getpatientdata/${patientId}`)
  }

  newInventoryItem(newMedicine): Observable<any>{
    return this.htttp.post(`${environment.api}/pharmacy/inventory/manageinventory`, newMedicine)
  }

  getInventory(): Observable<any>{
    return this.htttp.get(`${environment.api}/pharmacy/inventory/manageinventory`)
  }
  addSku(id,qty): Observable<any>{
    return this.htttp.put(`${environment.api}/pharmacy/inventory/manageinventory/${id}`,qty)
  }
  
  newInvoice({ patienId, items }: { patienId; items; }): Observable<any>{
    return this.htttp.post(`${environment.api}/pharmacy/patient/newinvoice/${patienId}`, items)
  }
}
