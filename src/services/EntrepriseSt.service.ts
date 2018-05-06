import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class EntrepriseStService{
  private host: string = 'http://localhost:8080/';

  constructor(private http:Http){}


  getEntrepriseSt(){
    return this.http.get(this.host+'entrepriseSst').map(resp=>resp.json());
  }

  getEntrep(id:number){
    return this.http.get(this.host+'entrepriseSst'+id).map(resp=>resp.json());
  }


}
