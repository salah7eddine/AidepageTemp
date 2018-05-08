import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observation} from "../../model/chantier/Observation.model";
/**
 * Created by Admin on 06/05/2018.
 */


@Injectable()
export class ObservationService{
  private host:string = 'http://localhost:8080/';

  constructor(private http:Http) {
  }

  getObservations() {
    return this.http.get(this.host + 'observations').map(resp=>resp.json());
  }

  saveObservation(observation:Observation) {
    return this.http.post(this.host + 'observation', observation).map(resp=>resp.json());
  }

}
