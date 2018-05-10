import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import  "rxjs/add/operator/map";
import  "rxjs/add/operator/catch"
import {map} from "rxjs/operators";
import {Chantier} from "../../model/chantier/Chantier.model.";
import {HttpHeaders, HttpClient} from "@angular/common/http";

@Injectable()
export class ChantierService {

  private host: string = 'http://localhost:8080/';
  private jwt = null;

  constructor(private http:HttpClient){}


  getChantiers(motCle:String,page:number,size:number){
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host+'chercherChantier?mc='+motCle+'&page='+page+'&size='+size,{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  getChantierss(){
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host+'chantiers',{headers: new HttpHeaders({'Authorization': this.jwt})});
  }


  getChantier(id:number){
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host+'chantier/'+id,{headers: new HttpHeaders({'Authorization': this.jwt})});
  }


  /*
   async getTypeChanties(){return
   let result= await this.http.get("http://localhost:8080/typeChantier");}

   getService(id:number){return this.http.get("http://localhost:8080/service/"+id).map(resp=>resp.json());}
   */


  saveChantier(chantier:Chantier){
    if (this.jwt == null) this.loadToken();
    return this.http.post(this.host+'chantier',chantier,{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  updateChantier( chantier:Chantier){
    if (this.jwt == null) this.loadToken();
    return this.http.put(this.host+'chantier/'+chantier.id_chantier,chantier,{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  deleteChantier(id:number){
    if (this.jwt == null) this.loadToken();
    return this.http.delete(this.host+'chantier/'+id,{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  loadToken() {
    this.jwt = localStorage.getItem('token');
  }
}
