import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Nguoidung} from '../../kien/model/Nguoidung';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class QlNguoiDungService {
  private baseURLget = 'http://192.168.1.23:8080/api/v1/user';
  private baseURL = 'http://192.168.1.23:8080/api/auth/signupNguoiDung';
  constructor(private http: HttpClient) {
  }
    getAll(): Observable<Nguoidung[]> {
      return this.http.get<Nguoidung[]>(this.baseURLget);
  }
  //   // @ts-ignore
  //   delete(username): Observable<any> {
  //     return this.http.delete(this.baseURL + '/' + username);
  // }

    // @ts-ignore
    create(data): Observable<any>{
      return this.http.post<Nguoidung>(this.baseURL, {
        username: data.userName,
        email: data.email,
        password: data.password
      }, httpOptions);
    }

    // @ts-ignore
    update(username, data): Observable<any> {
      return this.http.put(this.baseURL + '/' + username, data);
  }
    // @ts-ignore
    get(username): Observable<any> {
      return this.http.get(this.baseURLget + '/' + username);
  }
}
