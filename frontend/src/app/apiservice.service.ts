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
  apiurlCreate = 'http://localhost:3000/create';
  apiurlUpdate = 'http://localhost:3000/update/:id';
  apiurlDelete = 'http://localhost:3000/delete/:id';

  //get users
  getAllData(): Observable<any> {

    return this._http.get(this.apiUrl);

  }

  //create data

  createData(data: any): Observable<any> {

    return this._http.post(this.apiurlCreate, data);

  }


}
