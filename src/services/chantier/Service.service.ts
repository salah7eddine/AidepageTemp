import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Service} from "../../model/chantier/Service.model";
import {HttpHeaders, HttpClient} from "@angular/common/http";

@Injectable()
export class ServiceService{
  private host: string = 'http://localhost:8080/';
  private jwt = null;

  constructor(private http:HttpClient){}


  getServices(){
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host+'services',{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  getService(id:number){
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host+'service/'+id,{headers: new HttpHeaders({'Authorization': this.jwt})});
  }



  getEntites(){
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host+'entites',{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  saveService(service:Service){
    if (this.jwt == null) this.loadToken();
    return this.http.post(this.host+'service',service,{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  loadToken() {
    this.jwt = localStorage.getItem('token');
  }

}

