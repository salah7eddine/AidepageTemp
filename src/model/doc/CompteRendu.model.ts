import {EtatCompteRendu} from "./EtatCompteRendu.model";
/**
 * Created by Admin on 30/04/2018.
 */
export class CompteRendu{
  id_compte_rendu:number=null;
  dateCreation:Date=null;

  etatCompteRendu:EtatCompteRendu=null;

  constructor(etatCompteRendu:EtatCompteRendu){
    this.etatCompteRendu=etatCompteRendu;
  }
}
