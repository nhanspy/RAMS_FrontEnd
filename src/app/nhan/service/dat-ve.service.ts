import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
const baseURL = 'http://localhost:8080/api/v1'
@Injectable({
  providedIn: 'root'
})
export class DatVeService {

  // tslint:disable-next-line:variable-name
  constructor(private _httpClient: HttpClient) { }

  getAll(): Observable<any>{
    return this._httpClient.get(baseURL + '/vexe');
  }

  getById(id: string): Observable<any>{
    return this._httpClient.get(baseURL + '/vexe/' + id);
  }

  postPayment(price: number): Observable<any> {

    return this._httpClient.post(baseURL + '/pay', {
      url: 'http://localhost:8080',
      price
    });
  }

  // tslint:disable-next-line:typedef
  checkPayment(url: string){
    return this._httpClient.get(url);
  }
}
