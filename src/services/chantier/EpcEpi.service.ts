import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Rqs} from "../../model/chantier/Rqs.model";
import {EpcEpi} from "../../model/chantier/EpcEpi.model";
/**
 * Created by Admin on 06/05/2018.
 */


@Injectable()
export class EpcEpiService{
  private host:string = 'http://localhost:8080/';

  constructor(private http:Http) {
  }

  getEpcEpi() {
    return this.http.get(this.host + 'epcEpis').map(resp=>resp.json());
  }

  saveEpcEpi(epcEpi:EpcEpi) {
    return this.http.post(this.host + 'epcEpi', epcEpi).map(resp=>resp.json());
  }

}
