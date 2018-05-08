import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {HygieneProprete} from "../../model/chantier/HygieneProprete.model";

@Injectable()
export class HygienePropreteService {
  private host:string = 'http://localhost:8080/';

  constructor(private http:Http) {
  }

  getHygiennePropreteServices() {
    return this.http.get(this.host + 'hygienePropretes').map(resp=>resp.json());
  }

  saveHygiennePropreteService(hygieneProprete:HygieneProprete) {
    return this.http.post(this.host + 'hygieneProprete', hygieneProprete).map(resp=>resp.json());
  }

}
