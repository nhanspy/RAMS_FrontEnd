import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormChuyenXe} from '../../kien/model/FormChuyenXe';

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
  // @ts-ignore
  delete(maChuyen: string): Observable<any> {
    return this.http.delete(this.baseURLget + '/' + maChuyen);
  }

  // @ts-ignore
  create(data: FormChuyenXe): Observable<any>{
    console.log(data);
    return this.http.post<FormChuyenXe>(this.baseURL, {
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

}
