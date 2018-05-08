import {TypeObservation} from "../../model/chantier/TypeObservation.model";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
/**
 * Created by Admin on 06/05/2018.
 */


@Injectable()
export class TypeObservationService{
  private host:string = 'http://localhost:8080/';

  constructor(private http:Http) {
  }

  getTypeObservations() {
    return this.http.get(this.host + 'typeObseravtions').map(resp=>resp.json());
  }

  saveTypeObservation(typeobservation:TypeObservation) {
    return this.http.post(this.host + 'typeObservation', typeobservation).map(resp=>resp.json());
  }

}
