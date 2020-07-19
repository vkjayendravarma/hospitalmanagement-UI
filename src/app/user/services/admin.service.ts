import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { 
    
  }

  newUser(data): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'Authorization': window.localStorage.getItem('token')
      })
    }
    return this.http.post(`${environment.api}/register`, data,httpOptions)
  }

}
