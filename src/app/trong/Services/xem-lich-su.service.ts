import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ChuyenXe} from "../Model/ChuyenXe.class";
import {Xe} from "../Model/Xe.class";
import {TinhThanh} from "../Model/TinhThanh";
const baseURL = 'http://localhost:8080/api/v1';
@Injectable({
  providedIn: 'root'
})
export class XemLichSuService {
  constructor(private httpClient: HttpClient) { }
  chuyenXes: ChuyenXe[] = [];
  // @ts-ignore
  xe: Xe;
  Data: any;
  readAll(): Observable<any>{
    return this.httpClient.get(baseURL + '/' + 'chuyenxe');// chua biet dung hay sai
  }
  // tslint:disable-next-line:typedef
  getXeTheoChuyenXe(chuyenXe: ChuyenXe) {
    return this.httpClient      .get(baseURL + '/' + 'xe/' + chuyenXe.maXe);
  }

  // tslint:disable-next-line:typedef
  getNhaXe(xe: Xe): Observable<any> {
    return this.httpClient.get(baseURL + '/' + 'nhaxe/');
  }
  getTinhThanh(tinhThanh: TinhThanh): Observable<any>{
    return this.httpClient.get(baseURL + '/' + 'tinhthanh');
  }
}
