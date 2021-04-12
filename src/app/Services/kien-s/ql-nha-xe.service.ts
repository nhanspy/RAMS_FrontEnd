import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Nhaxe} from '../../kien/model/nhaxe';
// tslint:disable-next-line:no-unused-expression
const baseURL = 'http://172.16.1.159:8080/api/';
@Injectable({
  providedIn: 'root'
})
export class QlNhaXeService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    // @ts-ignore
    return this.httpClient.get(baseURL + 'v1/nhaxe');
  }
  addnhaxe(nhaxe: Nhaxe): Observable<Nhaxe>{
    // @ts-ignore
    return this.httpClient.post(baseURL + 'auth/signupNguoiDung', nhaxe);
  }
  editnhaxe(nhaxe: Nhaxe): Observable<any>{
    // @ts-ignore
    return this.httpClient.put(this.editnhaxe(), nhaxe);
  }
}
