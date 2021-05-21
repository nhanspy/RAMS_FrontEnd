import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Xe} from '../Models/Xe.class';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class QlXeService {
  private baseURLget = 'http://localhost:8080/api/v1/xe';
  private baseURL = 'http://localhost:8080/api/v1/xe';
  constructor(private http: HttpClient) {
  }
  getAll(): Observable<any> {
    return this.http.get(this.baseURLget);
  }
  // @ts-ignore
  delete(maXe: string): Observable<any> {
    return this.http.delete(this.baseURLget + '/' + maXe);
  }

  // @ts-ignore
  create(data): Observable<any>{
    return this.http.post<Xe>(this.baseURL, {
      maXe: data.maXe,
      bienSoXe: data.bienSoXe,
      maNhaXe: data.nhaXe.maNhaXe,
      tenNhaXe: data.nhaXe.tenNhaXe,
      maLoaiXe: data.loaiXe.maLoaiXe
    }, httpOptions);
  }
  // @ts-ignore
  update(bienSoXe, data): Observable<any> {
    return this.http.put(this.baseURL + '/' + bienSoXe, data);
  }
  // @ts-ignore
  get(bienSoXe): Observable<any> {
    return this.http.get(this.baseURLget + '/' + bienSoXe);
  }
}
