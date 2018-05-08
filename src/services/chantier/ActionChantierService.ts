import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Action} from "../../model/chantier/Action.model";
@Injectable()
export class ActionChantierService {
  private host:string = 'http://localhost:8080/';

  constructor(private http:Http) {
  }

  getActionChantiers() {
    return this.http.get(this.host + 'actions').map(resp=>resp.json());
  }

  saveActionChantier(action:Action) {
    return this.http.post(this.host + 'action', action).map(resp=>resp.json());
  }

}
