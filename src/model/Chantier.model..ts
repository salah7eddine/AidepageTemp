

import {EntrepriseSt} from "./EntrepriseSt.model";
import {Service} from "./Service.model";
import {TypeChantier} from "./TypeChantier.model";

export class Chantier{
  idChantier:any=null;
  libelle_chantier:string="";
  desc_chantier:string="";
  date_ordre:Date;
  date_fin:Date;


  entrepriseSt:EntrepriseSt=null ;
  service:Service=null;
  typeChantier:TypeChantier=null;



 constructor(entrepriseSt:EntrepriseSt, service:Service, typeChantier:TypeChantier){
   this.entrepriseSt=entrepriseSt;
   this.service=service;
   this.typeChantier=typeChantier;
 }






}
