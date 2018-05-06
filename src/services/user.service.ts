import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
/**
 * Created by Admin on 04/05/2018.
 */

@Injectable()
export class UserService{
  private host: string = 'http://localhost:8080/';

  constructor(private http:Http){}

  getFonctions(){return this.http.get(this.host+'fonctions').map(resp=>resp.json());
  }


}
