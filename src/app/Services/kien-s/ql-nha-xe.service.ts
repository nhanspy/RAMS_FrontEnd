import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Nhaxe} from '../../kien/model/nhaxe';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class QlNhaXeService {
  private baseURLget = 'http://localhost:8080/api/v1/nhaxe';
  private baseURL = 'http://localhost:8080/api/v1/nhaxe';
  constructor(private http: HttpClient) {
  }
  getAll(): Observable<any> {
    return this.http.get(this.baseURLget);
  }
  // @ts-ignore
  delete(maNhaxe: string): Observable<any> {
    return this.http.delete(this.baseURLget + '/' + maNhaxe);
  }

  // @ts-ignore
  create(data): Observable<any>{
    return this.http.post<Nhaxe>(this.baseURL, {
      maNhaXe: data.maNhaXe,
      tenNhaXe: data.tenNhaXe
    }, httpOptions);
  }

  // @ts-ignore
  update(tenNhaxe, data): Observable<any> {
    return this.http.put(this.baseURL + '/' + tenNhaxe, data);
  }
  // @ts-ignore
  get(tenNhaxe): Observable<any> {
    return this.http.get(this.baseURLget + '/' + tenNhaxe);
  }
}
