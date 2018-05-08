import {Http} from "@angular/http";
import {DocumentChantier} from "../../model/doc/DocumentChantier.model";
import {Injectable} from "@angular/core";
/**
 * Created by Admin on 06/05/2018.
 */

@Injectable()
export class DocumentChantierService {
  private host: string = 'http://localhost:8080/';
  constructor(private http:Http){}

  getDocumentsChantiers(){return this.http.get(this.host+'documentChantiers').map(resp=>resp.json());}

  saveDocumentChantier(documentChantier:DocumentChantier){ return this.http.post(this.host+'documentChantier',documentChantier).map(resp=>resp.json());}


}
