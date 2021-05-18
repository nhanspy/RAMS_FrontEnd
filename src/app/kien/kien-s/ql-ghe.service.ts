import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ghe} from '../Models/Ghe.class';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class QlGheService {
  private baseURLget = 'http://localhost:8080/api/v1/ghe';
  private baseURL = 'http://localhost:8080/api/v1/ghe';
  constructor(private http: HttpClient) {
  }
  getAll(): Observable<any> {
    return this.http.get(this.baseURLget);
  }
  // @ts-ignore
  delete(maGhe: string): Observable<any> {
    return this.http.delete(this.baseURLget + '/' + maGhe);
  }

  // @ts-ignore
  create(data): Observable<any>{
    return this.http.post<Ghe>(this.baseURL, {
      maGhe: data.maGhe,
      maLoaiGhe: data.loaiGhe.maLoaiGhe,
      tenLoaiGhe: data.loaiGhe.tenLoaiGhe,
      maTrangThai: data.trangThaiGhe.maTrangThai,
      tenTrangThai: data.trangThaiGhe.tenTrangThai,
    }, httpOptions);
  }
  // @ts-ignore
  update(maLoaiGhe, data): Observable<any> {
    return this.http.put(this.baseURL + '/' + maLoaiGhe, data);
  }
  // @ts-ignore
  get(maLoaiGhe): Observable<any> {
    return this.http.get(this.baseURLget + '/' + maLoaiGhe);
  }
}
