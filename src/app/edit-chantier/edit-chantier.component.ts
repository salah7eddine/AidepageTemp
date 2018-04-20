import { Component, OnInit } from '@angular/core';
import {Chantier} from "../../model/Chantier.model.";
import {ActivatedRoute} from "@angular/router";
import {EntrepriseSt} from "../../model/EntrepriseSt.model";
import {Entitie} from "../../model/Entitie.model";
import {TypeChantier} from "../../model/TypeChantier.model";
import {Service} from "../../model/Service.model";

@Component({
  selector: 'app-edit-chantier',
  templateUrl: './edit-chantier.component.html',
  styleUrls: ['./edit-chantier.component.css']
})
export class EditChantierComponent implements OnInit {

  mode:number=1;
  chantier:Chantier=new Chantier(new EntrepriseSt(),new Service(new Entitie()),new TypeChantier() );
  constructor(public activatedRoute:ActivatedRoute) {
    console.log("----------------------------");
    console.log(activatedRoute.snapshot.params['id']);
    console.log("----------------------------");

  }

  ngOnInit() {
  }

  updateChantier(){

  }

}
