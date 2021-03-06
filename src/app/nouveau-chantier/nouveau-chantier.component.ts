import { Component, OnInit } from '@angular/core';
import {ChantierService} from "../../services/chantier/Chantier.service";
import {EntrepriseStService} from "../../services/chantier/EntrepriseSt.service";
import {ServiceService} from "../../services/chantier/Service.service";
import {TypeChantiesService} from "../../services/chantier/TypeChanties.service";
import {Chantier} from "../../model/chantier/Chantier.model.";
import {EntrepriseSt} from "../../model/chantier/EntrepriseSt.model";
import {Service} from "../../model/chantier/Service.model";
import {Entitie} from "../../model/chantier/Entitie.model";
import {TypeChantier} from "../../model/chantier/TypeChantier.model";
import {Router} from "@angular/router";
import {AuthentificationService} from "../../services/user/authentification.service";


@Component({
  selector: 'app-nouveau-chantier',
  templateUrl: './nouveau-chantier.component.html',
  styleUrls: ['./nouveau-chantier.component.css']
})
export class NouveauChantierComponent implements OnInit {

  chantier:Chantier=new Chantier(new EntrepriseSt(),new Service(new Entitie()),new TypeChantier() );
  typeChantiers:any=null;
  EntrepriseSt:any=null;
  Services:any=null;

  mode:number=1;

  constructor(public chantierService:ChantierService,public typeChantiesService:TypeChantiesService,
              public entrepriseStService:EntrepriseStService,public serviceService:ServiceService,public router:Router,private authService:AuthentificationService) { }

  ngOnInit() {

    this.typeChantiesService.getTypeChantiers().subscribe(TypeChantiers=>{
      this.typeChantiers=JSON.parse(JSON.stringify(TypeChantiers));
    },err=>{
      console.log(err);
      this.authService.logout();
      this.router.navigateByUrl('/login');
    });

    this.entrepriseStService.getEntrepriseSt().subscribe(EntrepriseSt=>{
      this.EntrepriseSt=JSON.parse(JSON.stringify(EntrepriseSt));
    },err=>{
      console.log(err);
      this.authService.logout();
      this.router.navigateByUrl('/login');
    });

    this.serviceService.getServices().subscribe(Services=>{
      this.Services=JSON.parse(JSON.stringify(Services));
    },err=>{
      console.log(err);
      this.authService.logout();
      this.router.navigateByUrl('/login');
    })

  }

  saveChantier(){

    this.chantierService.saveChantier(this.chantier).subscribe( data=>{
        console.log(data);
        //this.chantier=data;
        this.mode=2;

      },err=>{
      console.log(err);
      this.authService.logout();
      this.router.navigateByUrl('/login');
    })


    /*
     *
     this.entrepriseStService.getEntrep(this.chantier.entrepriseSt.idEntrepSst).subscribe(dataEntreprise=>{
     console.log(dataEntreprise);
     this.chantier.entrepriseSt=dataEntreprise;
     },err=>{
     console.log(err);
     })

     this.chantierService.getTypeChantier(this.chantier.typeChantier.idTypeChantier).subscribe(dataTypeChantier=>{
     console.log(dataTypeChantier);
     this.chantier.typeChantier=dataTypeChantier;
     },err=>{
     console.log(err);
     })

     this.serviceService.getService(this.chantier.service.idService).subscribe(dataService=>{
     console.log(dataService);
     this.chantier.service=dataService;
     },err=>{
     console.log(err);
     })


     **/
  }

}
