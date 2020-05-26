import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, first } from 'rxjs/operators';
import { Configuration } from '../util/config';
import { JwtResponse } from '../model/jwt.response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string) {
    // return this.http.post<JwtResponse>(Configuration.getApiUrl() + '/' + Configuration.getLoginUrl(), { username, password })
    return this.http.get<JwtResponse>('../assets/json/login.json')
      .pipe(map(response => {
        Configuration.udpateToken(response);
      }));
  }

  logout() {
    Configuration.clearToken();
    this.router.navigate(['/login']);
  }

  resetPassword(email: string) {
    return this.http.post<JwtResponse>(Configuration.getApiUrl() + '/noauth/reset-password', { email })
      .pipe(map(response => {
        debugger;
      }));
  }

  checkSessionToken() {
    const token = Configuration.getToken();
    if (token) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      });
      const options = { headers: headers };
      // this.http.post<JwtResponse>(Configuration.getApiUrl() + '/' + Configuration.getUpdateTokenUrl(), null, options)
      this.http.get<JwtResponse>('../assets/json/login.json')
        .pipe(first())
        .subscribe(
          data => {
            Configuration.udpateToken(data);
            this.router.navigate(['/home']);
          },
          error => {
            alert('Invalid session. Please try again.');
            this.logout();
          });
    } else {
      this.logout();
    }
  }

  invalidateSession() {
    this.logout();
  }

  continueSession() {
    this.checkSessionToken();
  }

  getUser() {
    return Configuration.getUser();
  }

  getFirstName() {
    return Configuration.getFirstName();
  }
}
