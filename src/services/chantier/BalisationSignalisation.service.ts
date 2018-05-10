import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {BalisageSignalisation} from "../../model/chantier/BalisageSignalisation.model";
import {HttpHeaders, HttpClient} from "@angular/common/http";
/**
 * Created by Admin on 06/05/2018.
 */

@Injectable()
export class BalisationSignalisationService {
  private host:string = 'http://localhost:8080/';
  private jwt = null;

  constructor(private http:HttpClient) {
  }

  getBalisageSignalisations() {
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host + 'balisageSignalisations',{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  saveBalisageSignalisations(balisageSignalisations:BalisageSignalisation) {
    if (this.jwt == null) this.loadToken();
    return this.http.post(this.host + 'balisageSignalisation', balisageSignalisations,{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  loadToken() {
    this.jwt = localStorage.getItem('token');
  }

}
