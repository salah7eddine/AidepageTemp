import {User} from "../user/User.model";
import {Chantier} from "./Chantier.model.";
import {DocumentChantier} from "../doc/DocumentChantier.model";
import {AttitudeUrgence} from "./AttitudeUrgence.model";
import {BalisageSignalisation} from "./BalisageSignalisation.model";
import {Rqs} from "./Rqs.model";
import {EpcEpi} from "./EpcEpi.model";
import {AmenagementChantier} from "./AmenagementChantier.model";
import {CompteRendu} from "../doc/CompteRendu.model";
import {HygieneProprete} from "./HygieneProprete.model";
import {Observation} from "./Observation.model";
import {VisiteurModel} from "../user/Visiteur.model";
import {AgentModel} from "../user/Agent.model";
/**
 * Created by Admin on 30/04/2018.
 */


export class VisiteHs{


  id_viste:number=null;
  date_visite:Date=new Date();
  ordre_viste:Date;
  description:string="";//natureTravaux
  visiteurs:Array<VisiteurModel>=null;
  agents:Array<AgentModel>=null;

  user:User=null;
  compteRendu:CompteRendu=null;
  chantier:Chantier=null;
  balisageSignalisation:BalisageSignalisation=null;
  attitudeUrgence:AttitudeUrgence=null;
  documentChantier:DocumentChantier=null;
  rqs:Rqs=null;
  epcEpi:EpcEpi=null;
  amenagenmentChantier:AmenagementChantier=null;
  hygieneProprete:HygieneProprete=null;

  constructor(user:User, compteRendu:CompteRendu, chantier:Chantier, balisageSignalisation:BalisageSignalisation,attitudeUrgence:AttitudeUrgence,
              documentChantier:DocumentChantier, rqs:Rqs,epcEpi:EpcEpi,amenagenmentChantier:AmenagementChantier,
              hygieneProprete:HygieneProprete)
  {
    this.user=user;
    this.compteRendu=compteRendu;
    this.chantier=chantier;
    this.balisageSignalisation=balisageSignalisation;
    this.attitudeUrgence=attitudeUrgence;
    this.documentChantier=documentChantier;
    this.rqs=rqs;
    this.epcEpi=epcEpi;
    this.amenagenmentChantier=amenagenmentChantier;
    this.hygieneProprete=hygieneProprete;

  }

}
