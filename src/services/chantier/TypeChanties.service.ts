import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
/**
 * Created by Admin on 29/04/2018.
 */
@Injectable()
export class TypeChantiesService{
  private host: string = 'http://localhost:8080/';

  constructor(private http:Http){}

  getTypeChantiers(){return this.http.get(this.host+'typeChantier').map(resp=>resp.json());}

  getTypeChantier(id:number){return this.http.get(this.host+'typeChantier/'+id).map(resp=>resp.json());}

}
