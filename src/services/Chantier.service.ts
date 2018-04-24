import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import  "rxjs/add/operator/map";
import  "rxjs/add/operator/catch"
import {map} from "rxjs/operators";
import {Chantier} from "../model/Chantier.model.";
import {EntrepriseSt} from "../model/EntrepriseSt.model";

@Injectable()
export class ChantierService {

  constructor(private http:Http){}


  getChantiers(motCle:String,page:number,size:number){
    return this.http.get("http://localhost:8080/chercherChantier?mc="
      +motCle+"&page="+page+"&size="+size)
      .map(resp=>resp.json());
  }


  getChantier(id:number){return this.http.get("http://localhost:8080/chantier/"+id).map(resp=>resp.json());}


  /*
   async getTypeChanties(){return
   let result= await this.http.get("http://localhost:8080/typeChantier");}

   getService(id:number){return this.http.get("http://localhost:8080/service/"+id).map(resp=>resp.json());}
   */
  getTypeChanties(){return this.http.get("http://localhost:8080/typeChantier").map(resp=>resp.json());}

  getTypeChantier(id:number){return this.http.get("http://localhost:8080/typeChantier/"+id).map(resp=>resp.json());}


  getEntreprises(){return this.http.get("http://localhost:8080/entrepriseSst").map(resp=>resp.json()); }

  getServices(){return this.http.get("http://localhost:8080/services").map(resp=>resp.json());}

  saveChantier(chantier:Chantier){return this.http.post("http://localhost:8080/chantier",chantier).map(resp=>resp.json());}

  updateChantier(chantier:Chantier){return this.http.put("http://localhost:8080/chantier/"+chantier.idChantier,chantier).map(resp=>resp.json());}

  deleteChantier(id:number){return this.http.delete("http://localhost:8080/chantier/"+id).map(resp=>resp.json());}

}
