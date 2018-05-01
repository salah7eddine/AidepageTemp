import {Chantier} from "./Chantier.model.";
/**
 * Created by Admin on 30/04/2018.
 */

export class Action{
  id_action:number=null;
  object:string="";
  statut:string="";
  echeance:string="";

  chantier:Chantier=null;

  constructor(chantier:Chantier){
    this.chantier=chantier;
  }


}
