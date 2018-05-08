import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {User} from "../../model/user/User.model";
import {VisiteurModel} from "../../model/user/Visiteur.model";
import {AgentModel} from "../../model/user/Agent.model";
/**
 * Created by Admin on 04/05/2018.
 */

@Injectable()
export class UserService{
  private host: string = 'http://localhost:8080/';

  constructor(private http:Http){}

  getFonctions(){return this.http.get(this.host+'fonctions').map(resp=>resp.json());}

  getUser(id:number){return this.http.get(this.host+'user/'+id).map(resp=>resp.json());}

  getUsers(motCle:String,page:number,size:number){return this.http.get(this.host+'chercherUser?mc='+motCle+'&page='+page+'&size='+size).map(resp=>resp.json());
  }

  getusers(){return this.http.get(this.host+'users').map(resp=>resp.json());}

  getagents(){return this.http.get(this.host+'agents').map(resp=>resp.json());}
  getvisiteurs(){return this.http.get(this.host+'visiteurs').map(resp=>resp.json());}

  saveUser(user:User){
    return this.http.post(this.host+'user',user).map(resp=>resp.json());
  }

  saveVisiteur(visiteur:VisiteurModel){
    return this.http.post(this.host+'visiteur',visiteur).map(resp=>resp.json());
  }

  saveAgent(agent:AgentModel){
    return this.http.post(this.host+'agent',agent).map(resp=>resp.json());
  }

  deleteUser(id:number){return this.http.delete(this.host+'user/'+id).map(resp=>resp.json());}


}
