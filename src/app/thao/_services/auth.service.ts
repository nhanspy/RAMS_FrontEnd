import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from "../../nhan/Models/User.class";

const AUTH_API = 'http://localhost:8080/api/auth/';
const AUTH_API1 = 'http://localhost:8080/api/public/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private httpOptions: any;

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user: User): Observable<any> {
    // return this.http.post(AUTH_API + 'signup', {
    //   ten: user.ten,
    //   username: user.username,
    //   password: user.password,
    //   soDienThoai: user.soDienThoai,
    //   email: user.email,
    //   dia_chi: user.dia_chi,
    // }, httpOptions);
    console.log(user);
    return  this.http.post(AUTH_API + 'signupNguoiDung', user);
  }
  dangky(user: User): Observable<any> {
    // return this.http.post(AUTH_API + 'signupNhaxe', {
    //   ten: user.ten,
    //   username: user.username,
    //   password: user.password,
    //   soDienThoai: user.soDienThoai,
    //   email: user.email,
    //   dia_chi: user.diaChi,
    // }, httpOptions);
    console.log(user);
    return  this.http.post(AUTH_API + 'signupNhaXe', user);
  }
  resetPassword(email: string): Observable<any> {
    console.log(email)
    return this.http.post(AUTH_API1 + 'reset-password', {
      email: email,
    }, this.httpOptions);
  }
  verify(code: string): Observable<any>{
    console.log(code);
    return this.http.post(AUTH_API1 + 'verify', {
      code: code
    }, this.httpOptions);
  }

  verifyPassword(code: string): Observable<any> {
    return this.http.post(AUTH_API1 + 'verify-password', {
      code: code
    }, this.httpOptions);
  }
  doResetPassword(password: string, code: string): Observable<any> {
    return this.http.post(AUTH_API1 + 'do-reset-password', {
      password: password,
      code: code
    }, this.httpOptions);
  }
}
