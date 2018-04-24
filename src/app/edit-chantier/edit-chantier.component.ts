import { Component, OnInit } from '@angular/core';
import {Chantier} from "../../model/Chantier.model.";
import {ActivatedRoute, Router} from "@angular/router";
import {EntrepriseSt} from "../../model/EntrepriseSt.model";
import {Entitie} from "../../model/Entitie.model";
import {TypeChantier} from "../../model/TypeChantier.model";
import {Service} from "../../model/Service.model";
import {ChantierService} from "../../services/Chantier.service";

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

  constructor(public activatedRoute:ActivatedRoute,public chantierService:ChantierService,public router:Router) {

    this.id=activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {


    this.chantierService.getChantier(this.id).subscribe(data=>{

      this.chantier=data;
      console.log(this.chantier);
    },err=>{
      console.log(err);
    });


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
