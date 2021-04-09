import { Injectable } from '@angular/core';
import {Tuyenxe} from '../../kien/model/tuyenxe';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
const baseURL = 'http://localhost:8080/api/v1/chuyenxe';
@Injectable({
  providedIn: 'root'
})
export class QlTuyenXeService {
  // tslint:disable-next-line:variable-name

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get(baseURL);
  }
}
