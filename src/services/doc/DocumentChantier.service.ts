import {Http} from "@angular/http";
import {DocumentChantier} from "../../model/doc/DocumentChantier.model";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
/**
 * Created by Admin on 06/05/2018.
 */

@Injectable()
export class DocumentChantierService {
  private host: string = 'http://localhost:8080/';
  private jwt = null;

  constructor(private http:HttpClient){}

  getDocumentsChantiers(){
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host+'documentChantiers',{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  saveDocumentChantier(documentChantier:DocumentChantier){
    if (this.jwt == null) this.loadToken();
    return this.http.post(this.host+'documentChantier',documentChantier,{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  loadToken() {
    this.jwt = localStorage.getItem('token');
  }


}
