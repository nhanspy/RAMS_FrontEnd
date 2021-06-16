import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const baseURL = 'http://localhost:8080/api/v1';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SoatVeService {

  constructor(private _httpClient: HttpClient) { }

  soatVe(code: String): Observable<any>{
    return this._httpClient.post(baseURL + '/vexe/soatve', code);
  }
}
