import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelper} from 'angular2-jwt';

@Injectable()
export class AuthentificationService {
  private host: string = 'http://localhost:8080/';
  private roles: Array<any> = [];

  constructor(private http: HttpClient) {
  }

  login(user) {
    return this.http.post(this.host + 'login', user, {observe: 'response'});
  }

  saveToken(jwt: string) {
    localStorage.setItem('token', jwt);
    let jwthelper = new JwtHelper();
    this.roles = jwthelper.decodeToken(jwt).roles;
    localStorage.setItem('username', jwthelper.decodeToken(jwt).sub);
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return (localStorage.getItem('token') != null);
  }

}
