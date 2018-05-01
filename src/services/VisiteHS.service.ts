import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
/**
 * Created by Admin on 30/04/2018.
 */

@Injectable()
export class VisiteService{
  constructor(private http:Http){}

  getReponse(){
    return this.http.get("http://localhost:8080/reponses")
      .map(resp=>resp.json());
  }

  getVisites(){
    return this.http.get("http://localhost:8080/VisiteHs")
      .map(resp=>resp.json());
  }


  getVisite(id:number){return this.http.get("http://localhost:8080/VisiteHs/"+id).map(resp=>resp.json());}


}
