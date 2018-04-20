import { Component, OnInit } from '@angular/core';
import {Chantier} from "../../model/Chantier.model.";
import {ChantierService} from "../../services/Chantier.service";
import {EntrepriseSt} from "../../model/EntrepriseSt.model";
import {Service} from "../../model/Service.model";
import {TypeChantier} from "../../model/TypeChantier.model";
import {Entitie} from "../../model/Entitie.model";
import {EntrepriseStService} from "../../services/EntrepriseSt.service";
import {ServiceService} from "../../services/Service.service";


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
//,public entrepriseStService:EntrepriseStService,public serviceService:ServiceService
  constructor(public chantierService:ChantierService) { }

  ngOnInit() {
    this.chantierService.getTypeChanties().subscribe(data=>{
      this.typeChantiers=data;
    },err=>{
      console.log(err);
    });

    this.chantierService.getEntreprises().subscribe(data=>{
      this.EntrepriseSt=data;
    },err=>{
      console.log(err);
    });

    this.chantierService.getServices().subscribe(data=>{
      this.Services=data;
    },err=>{
      console.log(err);
    })
  }

  saveChantier(){
    this.chantierService.saveChantier(this.chantier)
      .subscribe( data=>{
        console.log(data);
        //this.chantier=data;
        this.mode=2;





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

      },err=>{
      console.log(err);
    })
  }

}
