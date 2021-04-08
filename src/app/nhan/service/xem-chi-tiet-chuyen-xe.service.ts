import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ChuyenXe} from '../../Models/ChuyenXe.class';
import {Observable} from 'rxjs';
const baseURL = 'http://localhost:8080/api/v1/chuyenxe'
@Injectable({
  providedIn: 'root'
})
export class XemChiTietChuyenXeService {

  // tslint:disable-next-line:variable-name
  constructor(private _httpClient: HttpClient) { }

  read(id: string): Observable<any> {
    // @ts-ignore
    return this._httpClient.get(baseURL + '/' + id);
  }
  //
  save(data: ChuyenXe): Observable<any> {
    return this._httpClient.post(baseURL, data);
  }

  delete(id: string): Observable<any> {
    return this._httpClient.delete(`${baseURL}/${id}`);
  }

  // searchByName(name): Observable<any> {
  //   return this._httpClient.get(`${baseURL}?name=${name}`);
  // }

}
