import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
const baseURL = 'http://localhost:8080/api/v1'
@Injectable({
  providedIn: 'root'
})
export class XemLichSuChuyenXeService {

  constructor(private _httpClient: HttpClient) { }

  getChuyen(id: string): Observable<any> {
    // @ts-ignore
    return this._httpClient.get(baseURL + '/chuyenxe/' + id);
  }

  getTrangThaiGhe(): Observable<any>{
    return this._httpClient.get(baseURL + '/trangthaighe');
  }

  getGhe(maXe: string): Observable<any>{
    return this._httpClient.get(baseURL + '/ghe/xe/' + maXe);
  }

  getVeXe(): Observable<any> {
    return this._httpClient.get(baseURL + '/vexe');
  }
}
