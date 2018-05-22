import {Injectable} from '@angular/core';
import {JwtHelper} from 'angular2-jwt';
import {BehaviorSubject} from "rxjs/Rx";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthentificationService {
  private host: string = 'http://localhost:8080/';
  private roles: Array<any> = [];

  constructor(private http:HttpClient){
  }

  isLoggedIn() {
    return (localStorage.getItem('token') != null);
  }

  login(user) {
   // this.loggedIn.next(true);
    return this.http.post(this.host + 'login', user, {observe: 'response'});
  }


  saveToken(jwt: string) {
    localStorage.setItem('token', jwt);
    let jwthelper = new JwtHelper();
    this.roles = jwthelper.decodeToken(jwt).roles;
    localStorage.setItem('username', jwthelper.decodeToken(jwt).sub);
  }

  logout() {
  //  this.loggedIn.next(false);
    localStorage.clear();
  }
  id

  isAdmin(){
    for (let r of this.roles){
      if(r.authority=='ADMIN') return true;
    }
    return false;
  }

  isAps(){
    for (let r of this.roles){
      if(r.authority=='APS') return true;
    }
    return false;
  }

  isUser(){
    for (let r of this.roles){
      if(r.authority=='USER') return true;
    }
    return false;
  }

}
