/**
 * Created by Admin on 30/04/2018.
 */


export class EtatCompteRendu{

  id_etat:number=null;
  libelle:string="";

  constructor(){

  }

  get idEtat():number{
    return this.id_etat;
  }

  set idEtat(id:number){
    this.id_etat=id;
  }

}
