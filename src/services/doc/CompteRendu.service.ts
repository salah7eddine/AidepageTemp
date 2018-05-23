import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {CompteRendu} from "../../model/doc/CompteRendu.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
/**
 * Created by Admin on 06/05/2018.
 */


@Injectable()
export class CompteRenduService{
  private host:string = 'http://localhost:8080/';
  private jwt = null;

  constructor(private http:HttpClient) {
  }

  getCompteRendus() {
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host + 'compteRendus',{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  saveCompteRendu(compteRendu:CompteRendu) {
    if (this.jwt == null) this.loadToken();
    return this.http.post(this.host + 'compteRendu', compteRendu,{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  updateCompteRenduByEtat(compteRendu:CompteRendu){
    if (this.jwt == null) this.loadToken();
    return this.http.put(this.host + 'compteRenduByEtat'+compteRendu.id_compte_rendu, compteRendu,{headers: new HttpHeaders({'Authorization': this.jwt})});
  }


  loadToken() {
    this.jwt = localStorage.getItem('token');
  }

}
