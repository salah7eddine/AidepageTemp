/**
 * Created by Admin on 30/04/2018.
 */

import {TypeObservation} from "./TypeObservation.model";
import {VisiteHs} from "./VisiteHs.model";

export class Observation{

  id_observation:number=0;
  descObservation:string="";

  visiteHs:VisiteHs=null;
  typeObservation:TypeObservation=null;

  constructor(visteHs:VisiteHs,typeObservation:TypeObservation){
    this.visiteHs=visteHs;
    this.typeObservation=typeObservation;
  }






}
