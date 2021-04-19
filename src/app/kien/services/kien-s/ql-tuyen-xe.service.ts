import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ChuyenXe} from '../../../nhan/Models/ChuyenXe.class';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class QlTuyenXeService {
  private baseURLget = 'http://localhost:8080/api/v1/chuyenxe';
  private baseURL = 'http://localhost:8080/api/v1/chuyenxe';
  constructor(private http: HttpClient) {
  }
  getAll(): Observable<any> {
    return this.http.get(this.baseURLget);
  }
  getAllBenXe(): Observable<any> {
    return this.http.get('http://localhost:8080/api/v1/ben');
  }
  // @ts-ignore
  delete(maChuyen: string): Observable<any> {
    return this.http.delete(this.baseURLget + '/' + maChuyen);
  }
  // @ts-ignore
  create(data: ChuyenXe): Observable<any>{
    console.log(data);
    return this.http.post<ChuyenXe>(this.baseURL, {
      maChuyen: data.maChuyen,
      xe: data.xe,
      thoiGian: data.thoiGian,
      benDen: data.benDen,
      benDi: data.benDi,
    }, httpOptions);
  }
  // @ts-ignore
  update(thoiGian, data): Observable<any> {
    return this.http.put(this.baseURL + '/' + thoiGian, data);
  }
  // @ts-ignore
  get(thoiGian): Observable<any> {
    return this.http.get(this.baseURLget + '/' + thoiGian);
  }

  save(data: ChuyenXe): Observable<any>{
    console.log(data);
    return this.http.post(this.baseURL, {
      maChuyen: data.maChuyen,
      thoiGian: data.thoiGian,
      benDi: data.benDi,
      benDen: data.benDen,
      xe: data.xe
    } );
  }
}
