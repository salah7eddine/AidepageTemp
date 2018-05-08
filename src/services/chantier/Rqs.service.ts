import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Rqs} from "../../model/chantier/Rqs.model";
/**
 * Created by Admin on 06/05/2018.
 */
@Injectable()
export class RqsService{
  private host:string = 'http://localhost:8080/';

  constructor(private http:Http) {
  }

  getRqs() {
    return this.http.get(this.host + 'rqs').map(resp=>resp.json());
  }

  saveRqs(rqs:Rqs) {
    return this.http.post(this.host + 'rqs', rqs).map(resp=>resp.json());
  }

}
