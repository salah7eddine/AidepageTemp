
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
import {Subject} from "rxjs/Rx";
@Component({
  selector: 'app-list-comptes-rendu',
  templateUrl: './list-comptes-rendu.component.html',
  styleUrls: ['./list-comptes-rendu.component.css']
})
export class ListComptesRenduComponent implements OnInit {


  id:number;
  pageVisite:any=[];
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
  dtOptions: DataTables.Settings = {};
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();

  constructor(public http:Http,public visiteService:VisiteService,public router:Router) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 7,
      language: {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
      },
      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      // Configure the buttons
      buttons: [
        'columnsToggle',
        'colvis',
        'csv',
        'pdf',
        'copy',
        'print',
        'excel',
        {
          text: 'Some button',
          key: '1',
          action: function (e, dt, node, config) {
            alert('Button activated');
          }
        }
      ]

    };
    this.visiteService.getVisites().subscribe(data=>{
      this.pageVisite=data;
      this.dtTrigger.next();
    },err=>{
      console.log(err);
    });
    // Use this attribute to enable the responsive extension
   // responsive: true
  }

  show(id:number){
    this.router.navigate(['/infosCompteRendu',id]);
  }



}
