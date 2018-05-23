import {EtatCompteRendu} from "./EtatCompteRendu.model";
/**
 * Created by Admin on 30/04/2018.
 */
export class CompteRendu{
  id_compte_rendu:number=null;
  dateCreation:Date=new Date();

  etatCompteRendu:EtatCompteRendu=null;

  constructor(etatCompteRendu:EtatCompteRendu){
    this.etatCompteRendu=this.etatCompteRendu;
    //this.etatCompteRendu.id_etat=1;//TODO delete
  }
}
