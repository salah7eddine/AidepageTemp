import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Rqs} from "../../model/chantier/Rqs.model";
import {EpcEpi} from "../../model/chantier/EpcEpi.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
/**
 * Created by Admin on 06/05/2018.
 */


@Injectable()
export class EpcEpiService{
  private host:string = 'http://localhost:8080/';
  private jwt = null;

  constructor(private http:HttpClient) {
  }

  getEpcEpi() {
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host + 'epcEpis',{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  saveEpcEpi(epcEpi:EpcEpi) {
    if (this.jwt == null) this.loadToken();
    return this.http.post(this.host + 'epcEpi', epcEpi,{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  loadToken() {
    this.jwt = localStorage.getItem('token');
  }
}
