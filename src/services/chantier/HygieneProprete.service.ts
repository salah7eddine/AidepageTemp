import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {HygieneProprete} from "../../model/chantier/HygieneProprete.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class HygienePropreteService {
  private host:string = 'http://localhost:8080/';
  private jwt = null;

  constructor(private http:HttpClient) {
  }

  getHygiennePropreteServices() {
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host + 'hygienePropretes',{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  saveHygiennePropreteService(hygieneProprete:HygieneProprete) {
    if (this.jwt == null) this.loadToken();
    return this.http.post(this.host + 'hygieneProprete', hygieneProprete,{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  loadToken() {
    this.jwt = localStorage.getItem('token');
  }
}
