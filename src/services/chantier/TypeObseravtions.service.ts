import {TypeObservation} from "../../model/chantier/TypeObservation.model";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
/**
 * Created by Admin on 06/05/2018.
 */


@Injectable()
export class TypeObservationService{
  private host:string = 'http://localhost:8080/';
  private jwt = null;

  constructor(private http:HttpClient) {
  }

  getTypeObservations() {
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host + 'typeObseravtions',{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  saveTypeObservation(typeobservation:TypeObservation) {
    if (this.jwt == null) this.loadToken();
    return this.http.post(this.host + 'typeObservation', typeobservation,{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  loadToken() {
    this.jwt = localStorage.getItem('token');
  }
}
