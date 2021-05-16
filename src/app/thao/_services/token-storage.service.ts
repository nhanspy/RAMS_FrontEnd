import { Injectable } from '@angular/core';


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(): void {
    localStorage.clear();
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    // return sessionStorage.getItem(TOKEN_KEY) as string;
    return localStorage.getItem(TOKEN_KEY) as string;
  }

  public setToken(value: string): string{
    return localStorage.getItem(TOKEN_KEY) as string;
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    return JSON.parse(sessionStorage.getItem(USER_KEY) as string);
  }

  logOut(): void {
    sessionStorage.clear();
  }
}
