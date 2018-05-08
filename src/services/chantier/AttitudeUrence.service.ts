import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {AttitudeUrgence} from "../../model/chantier/AttitudeUrgence.model";
/**
 * Created by Admin on 06/05/2018.
 */


@Injectable()
export class AttitudeUrgenceService{
  private host:string = 'http://localhost:8080/';

  constructor(private http:Http) {
  }

  getAttitudeUrgences() {
    return this.http.get(this.host + 'attitudeUrgences').map(resp=>resp.json());
  }

  saveAttitudeUrgence(attitudeUrgence:AttitudeUrgence) {
    return this.http.post(this.host + 'attitudeUrgence', attitudeUrgence).map(resp=>resp.json());
  }

}
