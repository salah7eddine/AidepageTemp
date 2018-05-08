import {Http} from "@angular/http";
import {AmenagementChantier} from "../../model/chantier/AmenagementChantier.model";
import {Injectable} from "@angular/core";
/**
 * Created by Admin on 06/05/2018.
 */

@Injectable()
export class AmenagementChantierService {
  private host:string = 'http://localhost:8080/';

  constructor(private http:Http) {
  }

  getAmenagementChantiers() {
    return this.http.get(this.host + 'amenagementChantier').map(resp=>resp.json());
  }

  saveAmenagementChantier(amenagementChantier:AmenagementChantier) {
    return this.http.post(this.host + 'amenagementChantier', amenagementChantier).map(resp=>resp.json());
  }

}
