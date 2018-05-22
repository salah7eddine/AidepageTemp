import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {VisiteService} from "../../services/chantier/VisiteHS.service";
import {Router} from "@angular/router";
import {UserService} from "../../services/user/user.service";
import {User} from "../../model/user/User.model";

@Component({
  selector: 'app-list-mes-comptes-rendu',
  templateUrl: './list-mes-comptes-rendu.component.html',
  styleUrls: ['./list-mes-comptes-rendu.component.css']
})
export class ListMesComptesRenduComponent implements OnInit {
  name:any=null;
  user:User=null;
  pageVisite:any=null;
  constructor(public http:Http,public userService:UserService,public visiteService:VisiteService,public router:Router) { }

  ngOnInit() {
    /*
     this.visiteService.getVisites().subscribe(data=>{
     this.pageVisite=data;
     },err=>{
     console.log(err);
     })
     */
    this.name=localStorage.getItem('username');
    this.userService.getUserByName(this.name).subscribe(data=>{
      this.user=JSON.parse(JSON.stringify(data));
      console.log(this.user);
      this.visiteService.getMyVisite(this.user.id_user).subscribe(data=>{
        this.pageVisite=data;
      },err=>{
        console.log(err);
      });
    },err=>{
      console.log(err);
    });

   /* console.log(this.user);
    this.visiteService.getMyVisite(this.user.id_user).subscribe(data=>{
      this.pageVisite=data;
    },err=>{
      console.log(err);
    });*/
  }
  show(id:number){
    this.router.navigate(['/infosCompteRendu',id]);
  }


}
