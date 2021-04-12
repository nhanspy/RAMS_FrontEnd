import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Nguoidung} from '../../kien/model/Nguoidung';
import {User} from '../../nhan/Models/User.class';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class QlNguoiDungService {
  private baseURLget = 'http://localhost:8080/api/v1/user';
  private baseURL = 'http://localhost:8080/api/auth/signupNguoiDung';
  constructor(private http: HttpClient) {
  }
  getAll(): Observable<any> {
    return this.http.get(this.baseURLget);
  }
    // @ts-ignore
    delete(id: int): Observable<any> {
      return this.http.delete(this.baseURLget + '/' + id);
  }

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
