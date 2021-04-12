import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ChuyenXe} from '../Models/ChuyenXe.class';
import {Observable} from 'rxjs';
import {TinhThanh} from '../Models/TinhThanh.class';
import {Ben} from '../Models/Ben.class';
import {forEachComment} from 'tslint';
import {start} from 'repl';
const baseURL = 'http://localhost:8080/api/v1'
@Injectable({
  providedIn: 'root'
})
export class XemChiTietChuyenXeService {

  // tslint:disable-next-line:variable-name
  constructor(private _httpClient: HttpClient) { }
  // @ts-ignore
  bensResult: Ben[];

  getChuyen(): Observable<any> {
    // @ts-ignore
    return this._httpClient.get(baseURL + '/chuyenxe');
  }
  getBenTheoTinh(tinhThanh: TinhThanh, bens: Ben[]): Ben[] {
    // tslint:disable-next-line:label-position no-unused-expression
    let dem = 1;
    this.bensResult = bens;
    console.log(this.bensResult);
    while (dem) {
      dem = 0;
      this.bensResult.forEach(ben => {
          if (ben.tinhThanh.maTinh !== tinhThanh.maTinh && dem === 0) {
            this.bensResult.splice(this.bensResult.indexOf(ben), 1);
            dem ++;
          }
      });
    }

    return this.bensResult;
  }

  getTinhTheoMaTinh(maTinh: string): Observable<any>{
    return this._httpClient.get(baseURL + '/tinhthanh/' + maTinh);
  }

  getBen(): Observable<any> {
    return this._httpClient.get(baseURL + '/ben');
  }
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
