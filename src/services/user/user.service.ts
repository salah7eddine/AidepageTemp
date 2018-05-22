import {Injectable} from "@angular/core";
import {User} from "../../model/user/User.model";
import {VisiteurModel} from "../../model/user/Visiteur.model";
import {AgentModel} from "../../model/user/Agent.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Rx";
import {VisiteHs} from "../../model/chantier/VisiteHs.model";
/**
 * Created by Admin on 04/05/2018.
 */

@Injectable()
export class UserService{
  private host: string = 'http://localhost:8080/';
  private jwt = null;

  constructor(private http:HttpClient){}

  getFonctions(){
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host+'fonctions',{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  getUserByName(name:string){
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host+'userName/'+name,{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  getUser(id:number) {
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host+'user/'+id,{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  getUsers(motCle:String,page:number,size:number){
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host+'chercherUser?mc='+motCle+'&page='+page+'&size='+size,{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  getusers(){
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host+'users',{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  getagents(){
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host+'agents',{headers: new HttpHeaders({'Authorization': this.jwt})});
  }
  getvisiteurs(){
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host+'visiteurs',{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  saveUser(user:User){
    if (this.jwt == null) this.loadToken();
    return this.http.post(this.host+'user',user,{headers: new HttpHeaders({'Authorization': this.jwt})});

  }

  saveVisiteur(visiteur:VisiteurModel){
    if (this.jwt == null) this.loadToken();
    return this.http.post(this.host+'visiteur',visiteur,{headers: new HttpHeaders({'Authorization': this.jwt})});


  }

  saveAgent(agent:AgentModel){
    if (this.jwt == null) this.loadToken();
    return this.http.post(this.host+'agent',agent,{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  deleteUser(id:number){
    if (this.jwt == null) this.loadToken();
    return this.http.delete(this.host+'user/'+id,{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  saveVisiteursVisite(visiteurs:Array<VisiteurModel>,visiteHs:VisiteHs){
    if (this.jwt == null) this.loadToken();
    return this.http.post(this.host+'visiteursvisite/'+visiteHs.id_viste,visiteurs,{headers: new HttpHeaders({'Authorization': this.jwt})})
  }

  saveAgentsVisite(agents:Array<AgentModel>,visiteHs:VisiteHs){
    if (this.jwt == null) this.loadToken();
    console.log(agents);
    console.log(visiteHs);
    return this.http.post(this.host+'agentsvisite/'+visiteHs.id_viste,agents,{headers: new HttpHeaders({'Authorization': this.jwt})})
  }

  loadToken() {this.jwt = localStorage.getItem('token');}
}
