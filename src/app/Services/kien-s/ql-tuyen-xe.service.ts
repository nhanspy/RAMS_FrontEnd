import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tuyenxe} from '../../kien/model/tuyenxe';

@Injectable({
  providedIn: 'root'
})
export class QlTuyenXeService {
  private baseURL = 'http://192.168.1.23:8080/api/v1/user';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Tuyenxe[]> {
    return this.http.get<Tuyenxe[]>(this.baseURL);
  }
  // @ts-ignore
  delete(maXe): Observable<any> {
    return this.http.delete(`${'http://localhost:8080/student/delete'}/${maXe}`);
  }

  // @ts-ignore
  create(data): Observable<any>{
    return this.http.post<Tuyenxe>('http://localhost:8080/student/add', data);
  }

  // @ts-ignore
  update(maXe, data): Observable<any> {
    return this.http.put(`${'http://localhost:8080/student/'}/${maXe}`, data);
  }
  // @ts-ignore
  get(maXe): Observable<any> {
    return this.http.get(`${'http://localhost:8080/student/'}/${maXe}`);
  }
}
