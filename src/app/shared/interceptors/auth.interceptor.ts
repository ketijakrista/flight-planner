import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const admin = localStorage.getItem('admin');
    const shouldAddAuthData = req.headers.get('Add-Auth-Data') !== null;

    if (admin && shouldAddAuthData) {
      const authorizationData = 'Basic ' + btoa(admin);

      const authReq = req.clone({
        headers: req.headers.delete('Add-Auth-Data'),
        setHeaders: {Authorization: authorizationData}
      });

      console.log(authReq)

      return next.handle(authReq);
    } else {
      return next.handle(req)
    }
  }
}
