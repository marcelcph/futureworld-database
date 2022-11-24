import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  // connect frontend to backend
  apiUrl='http://localhost:3702/user/';

  //Get all data
  getAllData():Observable<any>
  {
    return this._http.get(`${this.apiUrl}`);
  }
}
