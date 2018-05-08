import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {BalisageSignalisation} from "../../model/chantier/BalisageSignalisation.model";
/**
 * Created by Admin on 06/05/2018.
 */

@Injectable()
export class BalisationSignalisationService {
  private host:string = 'http://localhost:8080/';

  constructor(private http:Http) {
  }

  getBalisageSignalisations() {
    return this.http.get(this.host + 'balisageSignalisations').map(resp=>resp.json());
  }

  saveBalisageSignalisations(balisageSignalisations:BalisageSignalisation) {
    return this.http.post(this.host + 'balisageSignalisation', balisageSignalisations).map(resp=>resp.json());
  }

}
