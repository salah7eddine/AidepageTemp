import {Fonction} from "./Fonction.model";
/**
 * Created by Admin on 30/04/2018.
 */

export class User{

  id_user:number=null;
  pseudoName:string;
  email:string;
  num:number;
  password:string;
  dateCreation:Date=null;
  photo:File=null;
  fonction:Fonction;

  constructor(fonction:Fonction){
    this.id_user=1; //TODO delete
  }
}
