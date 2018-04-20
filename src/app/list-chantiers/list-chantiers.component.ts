import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {ChantierService} from "../../services/Chantier.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-chantiers',
  templateUrl: './list-chantiers.component.html',
  styleUrls: ['./list-chantiers.component.css']
})
export class ListChantiersComponent implements OnInit {

  pageChantiers:any;
  motCle:string="";
  currentPage:number=0;
  size:number=5;
  pages:Array<number>;


  constructor(public http:Http,public chantierservice:ChantierService,public router:Router) { }

  ngOnInit() {


  }

  doSearch(){
    this.chantierservice.getChantiers(this.motCle,this.currentPage, this.size).subscribe(data=>{
      console.log(data);
      this.pageChantiers=data;
      this.pages=new Array(data.totalPages);
    },err=>{
      console.log(err);
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

}
