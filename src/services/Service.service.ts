import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class ServiceService{
  constructor(private http:Http){}


  getServices(){
    return this.http.get("http://localhost:8080/services").map(resp=>resp.json());
  }

  getService(id:number){return this.http.get("http://localhost:8080/service/"+id).map(resp=>resp.json());}



  getEntites(){
    return this.http.get("http://localhost:8080/entites").map(resp=>resp.json());
  }

}

