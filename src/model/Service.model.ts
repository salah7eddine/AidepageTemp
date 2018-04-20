import {Entitie} from "./Entitie.model";
/**
 * Created by Admin on 18/04/2018.
 */

export class Service{
  idService:number;
  libelle:string="";
  entitie:Entitie;

  constructor(entitie:Entitie){
    this.entitie=entitie;
  }
}
