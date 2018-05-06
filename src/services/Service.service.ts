import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Service} from "../model/chantier/Service.model";

@Injectable()
export class ServiceService{
  private host: string = 'http://localhost:8080/';
  constructor(private http:Http){}


  getServices(){
    return this.http.get(this.host+'services').map(resp=>resp.json());
  }

  getService(id:number){return this.http.get(this.host+'service/'+id).map(resp=>resp.json());}



  getEntites(){return this.http.get(this.host+'entites').map(resp=>resp.json());}

  saveService(service:Service){return this.http.post(this.host+'service',service).map(resp=>resp.json());}

}

