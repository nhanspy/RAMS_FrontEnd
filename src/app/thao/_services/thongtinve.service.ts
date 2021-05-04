import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
const baseURL = 'http://172.16.1.159:8080/api/v1/vexe';
@Injectable({  providedIn: 'root'})
export class KiemTraVeService {
  // tslint:disable-next-line:variable-name
  // private _thongtinveList: Thongtinve[] = [
  //   new Thongtinve('Le Thi Thao', '033 454 0954', 'Da Nang', 'Phuong Trang', '3', '20h30', '73H1-44111'),
  // ];
  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) {
  }

  // @ts-ignore
  readById(id: string): Observable<any> {
    return this._http.get(baseURL + '/' + id);
  }
}
