import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Rqs} from "../../model/chantier/Rqs.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
/**
 * Created by Admin on 06/05/2018.
 */
@Injectable()
export class RqsService{
  private host:string = 'http://localhost:8080/';
  private jwt = null;

  constructor(private http:HttpClient) {
  }

  getRqs() {
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host + 'rqs',{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  saveRqs(rqs:Rqs) {
    if (this.jwt == null) this.loadToken();
    return this.http.post(this.host + 'rqs', rqs,{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  loadToken() {
    this.jwt = localStorage.getItem('token');
  }

}
