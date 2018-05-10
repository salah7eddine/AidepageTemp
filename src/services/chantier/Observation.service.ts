import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observation} from "../../model/chantier/Observation.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
/**
 * Created by Admin on 06/05/2018.
 */


@Injectable()
export class ObservationService{
  private host:string = 'http://localhost:8080/';
  private jwt = null;

  constructor(private http:HttpClient) {
  }

  getObservations() {
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host + 'observations',{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  saveObservation(observation:Observation) {
    if (this.jwt == null) this.loadToken();
    return this.http.post(this.host + 'observation', observation,{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  loadToken() {
    this.jwt = localStorage.getItem('token');
  }

}
