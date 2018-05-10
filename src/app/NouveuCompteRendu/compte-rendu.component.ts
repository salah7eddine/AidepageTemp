///<reference path="../../model/doc/DocumentChantier.model.ts"/>
import {Component, OnInit} from '@angular/core';
import {VisiteService} from "../../services/chantier/VisiteHS.service";
import {Chantier} from "../../model/chantier/Chantier.model.";
import {EntrepriseSt} from "../../model/chantier/EntrepriseSt.model";
import {Service} from "../../model/chantier/Service.model";
import {Entitie} from "../../model/chantier/Entitie.model";
import {TypeChantier} from "../../model/chantier/TypeChantier.model";
import {EntrepriseStService} from "../../services/chantier/EntrepriseSt.service";
import {ServiceService} from "../../services/chantier/Service.service";
import {TypeChantiesService} from "../../services/chantier/TypeChanties.service";
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
import {UserService} from "../../services/user/user.service";
import {ChantierService} from "../../services/chantier/Chantier.service";
import {DocumentChantierService} from "../../services/doc/DocumentChantier.service";
import {AmenagementChantierService} from "../../services/chantier/AmenagementChantier.service";
import {HygienePropreteService} from "../../services/chantier/HygieneProprete.service";
import {BalisationSignalisationService} from "../../services/chantier/BalisationSignalisation.service";
import {RqsService} from "../../services/chantier/Rqs.service";
import {EpcEpiService} from "../../services/chantier/EpcEpi.service";
import {AttitudeUrgenceService} from "../../services/chantier/AttitudeUrence.service";
import {CompteRenduService} from "../../services/doc/CompteRendu.service";
import {ObservationService} from "../../services/chantier/Observation.service";
import {TypeObservationService} from "../../services/chantier/TypeObseravtions.service";
import {ActionChantierService} from "../../services/chantier/ActionChantierService";

@Component({
  selector: 'app-compte-rendu',
  templateUrl: './compte-rendu.component.html',
  styleUrls: ['./compte-rendu.component.css']
})
export class CompteRenduComponent implements OnInit {


  user:User = new User(new Fonction());
  compteRendu:CompteRendu = new CompteRendu();
    chantier:Chantier = new Chantier(new EntrepriseSt(), new Service(new Entitie()), new TypeChantier());
  balisageSignalisation:BalisageSignalisation = new BalisageSignalisation();
  attitudeUrgence:AttitudeUrgence = new AttitudeUrgence();
  documentChantier:DocumentChantier = new DocumentChantier();
  rqs:Rqs = new Rqs();
  epcEpi:EpcEpi = new EpcEpi();
  amenagementChantier:AmenagementChantier = new AmenagementChantier();
  hygieneProprete:HygieneProprete = new HygieneProprete();

  visiteHS:VisiteHs = new VisiteHs(this.user, this.compteRendu,
    this.chantier, this.balisageSignalisation, this.attitudeUrgence, this.documentChantier, this.rqs, this.epcEpi,
    this.amenagementChantier, this.hygieneProprete);

  observation:Observation = new Observation(this.visiteHS, new TypeObservation());


  /* -----Action-------- */
  action:Action = new Action(this.visiteHS.chantier);


  reponse:any = null;
  chantiers:any = null;
  typeChantiers:any = null;
  EntrepriseSt:any = null;
  Services:any = null;
  fonction:any = null;
  agents:any = null;
  visiteurs:any = null;
  typeObservations:any = null;


  constructor(public visiteService:VisiteService,
              public typeChantiesService:TypeChantiesService,
              public entrepriseStService:EntrepriseStService,
              public serviceService:ServiceService,
              public userservice:UserService,
              public chantierService:ChantierService,
              public documentChantierService:DocumentChantierService,
              public amenagementChantierService:AmenagementChantierService,
              public hygienePropreteService:HygienePropreteService,
              public balisationSignalisationService:BalisationSignalisationService,
              public rqsService:RqsService,
              public epcEpiService:EpcEpiService,
              public attitudeUrgenceService:AttitudeUrgenceService,
              public compteRenduService:CompteRenduService,
              public observationService:ObservationService,
              public typeObservationService:TypeObservationService,
              public actionChantierService:ActionChantierService,
  ) {
  }

  ngOnInit() {

    this.visiteService.getReponse().subscribe(data=> {
      this.reponse = data;
    }, err=> {
      console.log(err)
    });

    this.chantierService.getChantierss().subscribe(data=> {
      this.chantiers = data;
    }, err=> {
      console.log(err);
    });

    this.typeChantiesService.getTypeChantiers().subscribe(TypeChantiers=> {
      this.typeChantiers = TypeChantiers;
    }, err=> {
      console.log(err);
    });

    this.entrepriseStService.getEntrepriseSt().subscribe(EntrepriseSt=> {
      this.EntrepriseSt = EntrepriseSt;
    }, err=> {
      console.log(err);
    });

    this.serviceService.getServices().subscribe(Services=> {
      this.Services = Services;
    }, err=> {
      console.log(err);
    });

    this.userservice.getFonctions().subscribe(Fonctions=> {
      this.fonction = Fonctions;
    }, err=> {
      console.log(err);
    });

    this.userservice.getagents().subscribe(agents=>{
      this.agents=agents;
    },err=>{
      console.log(err);
    });
    this.userservice.getvisiteurs().subscribe(visiteurs=>{
      this.visiteurs=visiteurs;
    },err=>{
      console.log(err);
    });

    this.typeObservationService.getTypeObservations().subscribe(typeOb=>{
      this.typeObservations=typeOb;
    },err=>{
      console.log(err);
    })

  }

  saveCpteRendu() {
    this.saveCompteR();

  }

  private saveCompteR() {

    this.documentChantierService.saveDocumentChantier(this.documentChantier).subscribe(data=> {
      this.documentChantier = JSON.parse(JSON.stringify(data));
      this.amenagementChantierService.saveAmenagementChantier(this.amenagementChantier).subscribe(data1=>{
        this.amenagementChantier=JSON.parse(JSON.stringify(data1));
        this.hygienePropreteService.saveHygiennePropreteService(this.hygieneProprete).subscribe(data2=>{
          this.hygieneProprete = JSON.parse(JSON.stringify(data2));
          this.balisationSignalisationService.saveBalisageSignalisations(this.balisageSignalisation).subscribe(data3=>{
            this.balisageSignalisation=JSON.parse(JSON.stringify(data3));
            this.rqsService.saveRqs(this.rqs).subscribe(data4=>{
              this.rqs=JSON.parse(JSON.stringify(data4));
              this.epcEpiService.saveEpcEpi(this.epcEpi).subscribe(data5=>{
                this.epcEpi=JSON.parse(JSON.stringify(data5));
                this.attitudeUrgenceService.saveAttitudeUrgence(this.attitudeUrgence).subscribe(data6=>{
                  this.attitudeUrgence=JSON.parse(JSON.stringify(data6));
                  this.compteRenduService.saveCompteRendu(this.compteRendu).subscribe(data7=>{
                    this.compteRendu=JSON.parse(JSON.stringify(data7));
                    this.initVisit();
                    this.visiteService.saveVisite(this.visiteHS).subscribe(data8=>{
                      this.visiteHS=JSON.parse(JSON.stringify(data8));
                      this.observation.visiteHs=this.visiteHS;
                      this.observationService.saveObservation(this.observation).subscribe(data9=>{
                        this.observation=JSON.parse(JSON.stringify(data9));
                        console.log(this.observation);
                      })
                    })
                  })
                })
              })
            })
          })
          })
      })
    })
    this.actionChantierService.saveActionChantier(this.action).subscribe(data=>{
      this.action=JSON.parse(JSON.stringify(data));;
    },err=>{
      console.log(err);
    });
  }
  initVisit(){
    this.visiteHS = new VisiteHs(this.user, this.compteRendu,
      this.chantier, this.balisageSignalisation, this.attitudeUrgence, this.documentChantier, this.rqs, this.epcEpi,
      this.amenagementChantier, this.hygieneProprete);
  }
}
