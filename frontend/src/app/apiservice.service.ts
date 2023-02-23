import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http: HttpClient) { }

  //connect frontend to backend


  apiUrl = 'http://localhost:3000/user';

  //get users
  getAllData(): Observable<any> {

    return this._http.get(this.apiUrl);

  }
}
