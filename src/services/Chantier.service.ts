import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import  "rxjs/add/operator/map";
import  "rxjs/add/operator/catch"
import {map} from "rxjs/operators";
import {Chantier} from "../model/chantier/Chantier.model.";

@Injectable()
export class ChantierService {

  private host: string = 'http://localhost:8080/';

  constructor(private http:Http){}


  getChantiers(motCle:String,page:number,size:number){return this.http.get(this.host+'chercherChantier?mc="+motCle+"&page="+page+"&size='+size)
    .map(resp=>resp.json());
  }

  getChantierss(){return this.http.get(this.host+'chantiers').map(resp=>resp.json());}


  getChantier(id:number){return this.http.get(this.host+'chantier/'+id).map(resp=>resp.json());}


  /*
   async getTypeChanties(){return
   let result= await this.http.get("http://localhost:8080/typeChantier");}

   getService(id:number){return this.http.get("http://localhost:8080/service/"+id).map(resp=>resp.json());}
   */


  saveChantier(chantier:Chantier){return this.http.post(this.host+'chantier',chantier).map(resp=>resp.json());}

  updateChantier( chantier:Chantier){return this.http.put(this.host+'chantier/'+chantier.id_chantier,chantier).map(resp=>resp.json());}

  deleteChantier(id:number){return this.http.delete(this.host+'chantier/'+id).map(resp=>resp.json());}

}
