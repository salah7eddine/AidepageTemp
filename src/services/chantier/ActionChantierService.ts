import {Injectable} from "@angular/core";
import {Action} from "../../model/chantier/Action.model";
import {HttpHeaders, HttpClient} from "@angular/common/http";

@Injectable()
export class ActionChantierService {
  private host:string = 'http://localhost:8080/';
  private jwt = null;

  constructor(private http:HttpClient) {
  }

  getActionChantiers() {
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host + 'actions',{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  saveActionChantier(action:Action) {
    if (this.jwt == null) this.loadToken();
    return this.http.post(this.host + 'action', action,{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  loadToken() {
    this.jwt = localStorage.getItem('token');
  }

}
