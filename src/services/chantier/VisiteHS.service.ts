import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {VisiteHs} from "../../model/chantier/VisiteHs.model";
/**
 * Created by Admin on 30/04/2018.
 */

@Injectable()
export class VisiteService{
  private host: string = 'http://localhost:8080/';

  constructor(private http:Http){}

  getReponse(){
    return this.http.get(this.host + 'reponses')
      .map(resp=>resp.json());
  }

  getVisites(){
    return this.http.get(this.host + 'VisiteHs')
      .map(resp=>resp.json());
  }


  getVisite(id:number){return this.http.get(this.host + 'VisiteHs/' +id).map(resp=>resp.json());}

  saveVisite(visite:VisiteHs){
    return this.http.post(this.host+'visiteHs',visite).map(resp=>resp.json());
  }


}
