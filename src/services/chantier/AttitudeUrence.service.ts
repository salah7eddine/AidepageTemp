import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {AttitudeUrgence} from "../../model/chantier/AttitudeUrgence.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
/**
 * Created by Admin on 06/05/2018.
 */


@Injectable()
export class AttitudeUrgenceService{
  private host:string = 'http://localhost:8080/';
  private jwt = null;

  constructor(private http:HttpClient) {
  }

  getAttitudeUrgences() {
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host + 'attitudeUrgences',{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  saveAttitudeUrgence(attitudeUrgence:AttitudeUrgence) {
    if (this.jwt == null) this.loadToken();
    return this.http.post(this.host + 'attitudeUrgence', attitudeUrgence,{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  loadToken() {
    this.jwt = localStorage.getItem('token');
  }

}
