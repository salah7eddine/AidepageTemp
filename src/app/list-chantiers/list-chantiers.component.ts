import { Component, OnInit } from '@angular/core';
import "rxjs/add/operator/map";
import {ChantierService} from "../../services/chantier/Chantier.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Chantier} from "../../model/chantier/Chantier.model.";
import {EntrepriseSt} from "../../model/chantier/EntrepriseSt.model";
import {Service} from "../../model/chantier/Service.model";
import {Entitie} from "../../model/chantier/Entitie.model";
import {TypeChantier} from "../../model/chantier/TypeChantier.model";
import {HttpClient} from "@angular/common/http";
import {AuthentificationService} from "../../services/user/authentification.service";

@Component({
  selector: 'app-list-chantiers',
  templateUrl: './list-chantiers.component.html',
  styleUrls: ['./list-chantiers.component.css']
})
export class ListChantiersComponent implements OnInit {
  //$:any;
  chantier:Chantier=new Chantier(new EntrepriseSt(),new Service(new Entitie()),new TypeChantier());
  id:number;
  pageChantiers:any;
  motCle:string="";
  currentPage:number=0;
  size:number=10;
  pages:Array<number>;
  chantiers:any=null;


  constructor(public http:HttpClient,public chantierservice:ChantierService,public router:Router,private authService:AuthentificationService) { }

  ngOnInit() {
    this.chantierservice.getChantierss().subscribe(data=>{
      this.chantiers=data;
    },err=>{
      console.log(err);
      this.authService.logout();
      this.router.navigateByUrl('/login');

    })

  }

  doSearch(){
    this.chantierservice.getChantiers(this.motCle,this.currentPage, this.size).subscribe(data=>{
      this.pageChantiers=JSON.parse(JSON.stringify(data));
      this.pages=new Array(JSON.parse(JSON.stringify(data)).totalPages);
    },err=>{
      console.log(err);
      this.authService.logout();
      this.router.navigateByUrl('/login');

    })
  }

  chercher(){
    this.doSearch();
  }

  gotoPage(i:number){
    this.currentPage=i;
    this.doSearch();
  }

  onEditChantier(id:number){
    this.router.navigate(['editChantier',id]);
  }

  onDeleteChantier(c:Chantier){

    console.log(c);
    let confirm=window.confirm('Etez-vous sure?');
    console.log(confirm);

    if(confirm==true){
      this.chantierservice.deleteChantier(c.id_chantier).subscribe(data=>{
        this.pageChantiers.content.splice(
          this.pageChantiers.content.indexof(c),1
        );
      },err=>{
        console.log(err);
        this.authService.logout();
        this.router.navigateByUrl('/login');
      })
    }

  }

}
