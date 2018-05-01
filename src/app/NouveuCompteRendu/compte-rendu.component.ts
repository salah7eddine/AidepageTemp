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

@Component({
  selector: 'app-compte-rendu',
  templateUrl: './compte-rendu.component.html',
  styleUrls: ['./compte-rendu.component.css']
})
export class CompteRenduComponent implements OnInit {

  reponse:any=null;
  chantier:Chantier=new Chantier(new EntrepriseSt(),new Service(new Entitie()),new TypeChantier());

  documentChantier:DocumentChantier=new DocumentChantier();
  balisageSignalisation:BalisageSignalisation=new BalisageSignalisation();
  amenagementChantier:AmenagementChantier=new AmenagementChantier();

  visiteHS:VisiteHs=new VisiteHs(new User(new Fonction()),new CompteRendu(new EtatCompteRendu()),
    new Chantier(new EntrepriseSt(),new Service(new Entitie()),new TypeChantier())
    ,new BalisageSignalisation(),new AttitudeUrgence(),new DocumentChantier(),new Rqs(),new EpcEpi(),new AmenagementChantier(),new HygieneProprete());

  typeChantiers:any=null;
  EntrepriseSt:any=null;
  Services:any=null;


  constructor(public visiteService:VisiteService,public typeChantiesService:TypeChantiesService, public entrepriseStService:EntrepriseStService,
              public serviceService:ServiceService) { }

  ngOnInit() {

    this.visiteService.getReponse().subscribe(data=>{
        this.reponse=data;
      },err=>{console.log(err)
      });

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

  }


}
