import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class EntrepriseStService{
  private host: string = 'http://localhost:8080/';
  private jwt = null;

  constructor(private http:HttpClient){}


  getEntrepriseSt(){
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host+'entrepriseSst',{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  getEntrep(id:number){
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host+'entrepriseSst'+id,{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  loadToken() {
    this.jwt = localStorage.getItem('token');
  }
}
