import {AmenagementChantier} from "../../model/chantier/AmenagementChantier.model";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
/**
 * Created by Admin on 06/05/2018.
 */

@Injectable()
export class AmenagementChantierService {
  private host:string = 'http://localhost:8080/';
  private jwt = null;

  constructor(private http:HttpClient) {
  }

  getAmenagementChantiers() {
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host + 'amenagementChantier',{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  saveAmenagementChantier(amenagementChantier:AmenagementChantier) {
    if (this.jwt == null) this.loadToken();
    return this.http.post(this.host + 'amenagementChantier', amenagementChantier,{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  loadToken() {
    this.jwt = localStorage.getItem('token');
  }

}
