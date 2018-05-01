import {Fonction} from "./Fonction.model";
import {VisiteHs} from "../chantier/VisiteHs.model";
/**
 * Created by Admin on 30/04/2018.
 */

export class User{

  id_user:number=null;
  pseudoName:string;
  email:string;
  num:number;

  fct:Fonction;

  constructor(fonction:Fonction){

  }
}
