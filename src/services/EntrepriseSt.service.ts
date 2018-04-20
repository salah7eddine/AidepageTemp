import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class EntrepriseStService{

  constructor(private http:Http){}


  getEntrepriseSt(){
    return this.http.get("http://localhost:8080/entrepriseSst").map(resp=>resp.json());
  }

  getEntrep(id:number){
    return this.http.get("http://localhost:8080/entrepriseSst"+id).map(resp=>resp.json());
  }


}
