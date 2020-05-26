import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { Configuration } from '../util/config';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {
  constructor(public authenticationService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const user = Configuration.getUser();
      if (user && Configuration.getToken()) {
          request = request.clone({
              setHeaders: {
                  Authorization: `Bearer ${Configuration.getToken()}`
              }
          });
      }
      return next.handle(request);
  }
}
