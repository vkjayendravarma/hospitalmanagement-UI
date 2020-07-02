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
    return this.http.post(environment.api + '/reception/patients/new', data)
  }
}
