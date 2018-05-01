import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ChantierService} from "../../services/Chantier.service";
import {ServiceService} from "../../services/Service.service";
import {EntrepriseStService} from "../../services/EntrepriseSt.service";
import {TypeChantiesService} from "../../services/TypeChanties.service";
import {Chantier} from "../../model/chantier/Chantier.model.";
import {EntrepriseSt} from "../../model/chantier/EntrepriseSt.model";
import {Service} from "../../model/chantier/Service.model";
import {Entitie} from "../../model/chantier/Entitie.model";
import {TypeChantier} from "../../model/chantier/TypeChantier.model";

@Component({
  selector: 'app-edit-chantier',
  templateUrl: './edit-chantier.component.html',
  styleUrls: ['./edit-chantier.component.css']
})
export class EditChantierComponent implements OnInit {

  mode:number=1;
  public chantier:Chantier=new Chantier(new EntrepriseSt(),new Service(new Entitie()),new TypeChantier() );
  id:any=0;
  typeChantiers:any=null;
  EntrepriseSt:any=null;
  Services:any=null;

  constructor(public activatedRoute:ActivatedRoute,public chantierService:ChantierService,public router:Router,public typeChantiesService:TypeChantiesService,
              public entrepriseStService:EntrepriseStService,public serviceService:ServiceService) {

    this.id=activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {

    this.chantierService.getChantier(this.id).subscribe(Chantier=>{
      this.chantier=Chantier;
    },err=>{
      console.log(err);
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

  updateChantier(){
    this.chantierService.updateChantier(this.chantier).subscribe(data=>{
        alert("Mise à jour effectuée");
        this.router.navigate(['listChantiers']);
    },err=>{
      console.log(err);
      alert("Problème ");
    })

  }

}
