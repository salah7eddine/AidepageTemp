import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
/**
 * Created by Admin on 29/04/2018.
 */
@Injectable()
export class TypeChantiesService{
  private host: string = 'http://localhost:8080/';
  private jwt = null;

  constructor(private http:HttpClient){}

  getTypeChantiers(){
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host+'typeChantier',{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  getTypeChantier(id:number){
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host+'typeChantier/'+id,{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  loadToken() {
    this.jwt = localStorage.getItem('token');
  }
}
