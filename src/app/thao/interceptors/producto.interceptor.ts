import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenStorageService} from "../_services/token-storage.service";


@Injectable()
export class ProductoInterceptor implements HttpInterceptor {

  constructor(private tokenStorageService: TokenStorageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = request;
    const token = this.tokenStorageService.getToken();
    if (token != null) {
      authReq = authReq.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }
    return next.handle(authReq);
  }
}

export const productoInterceptor = [ {provide: HTTP_INTERCEPTORS, useClass: ProductoInterceptor, multi: true}];

