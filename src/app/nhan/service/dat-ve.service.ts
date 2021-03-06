import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {VeXe} from '../Models/VeXe.class';
const baseURL = 'http://localhost:8080/api/v1';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class DatVeService {

  // tslint:disable-next-line:variable-name
  constructor(private _httpClient: HttpClient) { }

  getAll(): Observable<any>{
    return this._httpClient.get(baseURL + '/vexe');
  }

  getById(id: string): Observable<any>{
    return this._httpClient.get(baseURL + '/vexe/' + id);
  }

  postPayment(price: number): Observable<any> {

    return this._httpClient.post(baseURL + '/pay', {
      url: 'http://localhost:8080',
      price
    });
  }

  postVeXe(veXe: VeXe): Observable<any> {
    let ghes : String[] = [];
    veXe.ghe.forEach(
      item => {
        // @ts-ignore
        ghes.push(item.maGhe);
      }
    );
    return this._httpClient.post(baseURL + '/vexe', {
      thoiGian: veXe.thoiGian,
      userNguoiDung: veXe.userNguoiDung.id,
      userNhaXe: veXe.userNhaXe.id,
      chuyenXe: veXe.chuyenXe.maChuyen,
      giaTien: veXe.giaTien,
      ghe: ghes,
      isThanhToan: false
    });
  }

  updateVeXe(maVe: String[]): Observable<any>{
    return this._httpClient.post(baseURL + '/vexe/updateState', maVe , httpOptions);
  }

  updateGhe(strMaVe: String[]): Observable<any>{
    return this._httpClient.post(baseURL + '/ghe/updateGhe', strMaVe , httpOptions);
  }

  // @ts-ignore
  urlStr: string;
  sendMail(mailSend: string, id: string){
    this.urlStr = 'http://localhost:8080/send/' + id + '/' + mailSend;
    console.log(this.urlStr);
    // @ts-ignore
    return this._httpClient.get(this.urlStr);
  }

  sendMailPost(data: any){
    this.urlStr = 'http://localhost:8080/mail/send';
    console.log(this.urlStr);
    console.log(data);
    // @ts-ignore
    return this._httpClient.post(this.urlStr, data);
  }
}
