///<reference path="../../model/doc/DocumentChantier.model.ts"/>
import { Component, OnInit } from '@angular/core';
import {VisiteService} from "../../services/VisiteHS.service";
import {Chantier} from "../../model/chantier/Chantier.model.";
import {EntrepriseSt} from "../../model/chantier/EntrepriseSt.model";
import {Service} from "../../model/chantier/Service.model";
import {Entitie} from "../../model/chantier/Entitie.model";
import {TypeChantier} from "../../model/chantier/TypeChantier.model";
import {EntrepriseStService} from "../../services/EntrepriseSt.service";
import {ServiceService} from "../../services/Service.service";
import {TypeChantiesService} from "../../services/TypeChanties.service";
import {DocumentChantier} from "../../model/doc/DocumentChantier.model";
import {BalisageSignalisation} from "../../model/chantier/BalisageSignalisation.model";
import {AmenagementChantier} from "../../model/chantier/AmenagementChantier.model";
import {HygieneProprete} from "../../model/chantier/HygieneProprete.model";
import {EpcEpi} from "../../model/chantier/EpcEpi.model";
import {Rqs} from "../../model/chantier/Rqs.model";
import {AttitudeUrgence} from "../../model/chantier/AttitudeUrgence.model";
import {EtatCompteRendu} from "../../model/doc/EtatCompteRendu.model";
import {CompteRendu} from "../../model/doc/CompteRendu.model";
import {Fonction} from "../../model/user/Fonction.model";
import {User} from "../../model/user/User.model";
import {VisiteHs} from "../../model/chantier/VisiteHs.model";
import {Observation} from "../../model/chantier/Observation.model";
import {TypeObservation} from "../../model/chantier/TypeObservation.model";
import {Action} from "../../model/chantier/Action.model";
import {UserService} from "../../services/user.service";
import {ChantierService} from "../../services/Chantier.service";

@Component({
  selector: 'app-compte-rendu',
  templateUrl: './compte-rendu.component.html',
  styleUrls: ['./compte-rendu.component.css']
})
export class CompteRenduComponent implements OnInit {


  user:User=new User(new Fonction());
  compteRendu:CompteRendu=new CompteRendu(new EtatCompteRendu());
  chantier:Chantier=new Chantier(new EntrepriseSt(),new Service(new Entitie()),new TypeChantier());
  balisageSignalisation:BalisageSignalisation=new BalisageSignalisation();
  attitudeUrgence:AttitudeUrgence=new AttitudeUrgence();
  documentChantier:DocumentChantier=new DocumentChantier();
  rqs:Rqs=new Rqs();
  epcEpi:EpcEpi=new EpcEpi();
  amenagementChantier:AmenagementChantier=new AmenagementChantier();
  hygieneProprete:HygieneProprete=new HygieneProprete();

  visiteHS:VisiteHs=new VisiteHs(this.user,this.compteRendu,
    this.chantier,this.balisageSignalisation,this.attitudeUrgence,this.documentChantier,this.rqs,this.epcEpi,
    this.amenagementChantier,this.hygieneProprete);

  observation:Observation=new Observation(this.visiteHS,new TypeObservation());


  /* -----Action-------- */
  action:Action=new Action(this.chantier);




  reponse:any=null;
  chantiers:any=null;
  typeChantiers:any=null;
  EntrepriseSt:any=null;
  Services:any=null;
  fonction:any=null;


  constructor(public visiteService:VisiteService,public typeChantiesService:TypeChantiesService, public entrepriseStService:EntrepriseStService,
              public serviceService:ServiceService,public userservice:UserService,public chantierService:ChantierService) { }

  ngOnInit() {

    this.visiteService.getReponse().subscribe(data=>{
        this.reponse=data;
      },err=>{console.log(err)
      });

    this.chantierService.getChantierss().subscribe(data=>{
      this.chantiers=data;
    },err=>{
      console.log(err);
    })

    this.typeChantiesService.getTypeChantiers().subscribe(TypeChantiers=>{
      this.typeChantiers=TypeChantiers;
    },err=>{
      console.log(err);
    });

    this.entrepriseStService.getEntrepriseSt().subscribe(EntrepriseSt=>{
      this.EntrepriseSt=EntrepriseSt;
    },err=>{
      console.log(err);
    });

    this.serviceService.getServices().subscribe(Services=>{
      this.Services=Services;
    },err=>{
      console.log(err);
    })

    this.userservice.getFonctions().subscribe(Fonctions=>{
      this.fonction=Fonctions;
    },err=>{
      console.log(err);
    })

  }

  saveCpteRendu(){


    console.log("--------visiteHS----------");
    console.log(this.visiteHS);
    console.log("---------chantier---------");
    console.log(this.chantier);
    console.log("--------compteRendu----------");
    console.log(this.compteRendu);
    console.log("------------------");
    console.log(this.amenagementChantier);
    console.log("------------------");
    console.log(this.hygieneProprete);
    console.log("------------------");
    console.log(this.rqs);



  }
}
