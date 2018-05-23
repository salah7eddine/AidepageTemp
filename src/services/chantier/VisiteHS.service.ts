import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {VisiteHs} from "../../model/chantier/VisiteHs.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
/**
 * Created by Admin on 30/04/2018.
 */

@Injectable()
export class VisiteService{
  private host: string = 'http://localhost:8080/';
  private jwt = null;

  constructor(private http:HttpClient){}

  getReponse(){
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host + 'reponses',{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  getVisites(){
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host + 'visiteHs',{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  getVisite(id:number){
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host + 'visiteHs/' +id,{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  getMyVisite(id:number){
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host + 'myVisiteHs/' +id,{headers: new HttpHeaders({'Authorization': this.jwt})})
  }

  getVisiteByEtat(){
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host + 'visiteHsByEtat',{headers: new HttpHeaders({'Authorization': this.jwt})})
  }


  saveVisite(visite:VisiteHs){
    if (this.jwt == null) this.loadToken();
    return this.http.post(this.host+'visiteHs',visite,{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  loadToken() {
    this.jwt = localStorage.getItem('token');
  }


}
