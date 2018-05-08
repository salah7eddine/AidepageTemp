import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {CompteRendu} from "../../model/doc/CompteRendu.model";
/**
 * Created by Admin on 06/05/2018.
 */


@Injectable()
export class CompteRenduService{
  private host:string = 'http://localhost:8080/';

  constructor(private http:Http) {
  }

  getCompteRendus() {
    return this.http.get(this.host + 'compteRendus').map(resp=>resp.json());
  }

  saveCompteRendu(compteRendu:CompteRendu) {
    return this.http.post(this.host + 'compteRendu', compteRendu).map(resp=>resp.json());
  }

}
