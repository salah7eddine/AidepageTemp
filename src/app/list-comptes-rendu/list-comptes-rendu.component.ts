
import {Component, OnInit} from "@angular/core";
import {User} from "../../model/user/User.model";
import {Fonction} from "../../model/user/Fonction.model";
import {CompteRendu} from "../../model/doc/CompteRendu.model";
import {EtatCompteRendu} from "../../model/doc/EtatCompteRendu.model";
import {Chantier} from "../../model/chantier/Chantier.model.";
import {EntrepriseSt} from "../../model/chantier/EntrepriseSt.model";
import {Service} from "../../model/chantier/Service.model";
import {TypeChantier} from "../../model/chantier/TypeChantier.model";
import {Entitie} from "../../model/chantier/Entitie.model";
import {BalisageSignalisation} from "../../model/chantier/BalisageSignalisation.model";
import {AttitudeUrgence} from "../../model/chantier/AttitudeUrgence.model";
import {DocumentChantier} from "../../model/doc/DocumentChantier.model";
import {Rqs} from "../../model/chantier/Rqs.model";
import {EpcEpi} from "../../model/chantier/EpcEpi.model";
import {AmenagementChantier} from "../../model/chantier/AmenagementChantier.model";
import {HygieneProprete} from "../../model/chantier/HygieneProprete.model";
import {VisiteHs} from "../../model/chantier/VisiteHs.model";
import {Http} from "@angular/http";
import {VisiteService} from "../../services/chantier/VisiteHS.service";
import {Router, ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-list-comptes-rendu',
  templateUrl: './list-comptes-rendu.component.html',
  styleUrls: ['./list-comptes-rendu.component.css']
})
export class ListComptesRenduComponent implements OnInit {


  id:number;
  pageVisite:any;
  user:User = new User(new Fonction());
  compteRendu:CompteRendu = new CompteRendu(new EtatCompteRendu());
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


  constructor(public http:Http,public visiteService:VisiteService,public router:Router) { }

  ngOnInit() {
    this.visiteService.getVisites().subscribe(data=>{
      this.pageVisite=data;
    },err=>{
      console.log(err);
    })
  }

  show(id:number){
    this.router.navigate(['/infosCompteRendu',id]);
  }



}
