import { Component, OnInit } from '@angular/core';
import {Fonction} from "../../model/user/Fonction.model";
import {User} from "../../model/user/User.model";
import {UserService} from "../../services/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthentificationService} from "../../services/user/authentification.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  fonctions:any=null;
  mode:number=1;
  public user:User=new User(new Fonction() );
  id:any=0;

  constructor(public activatedRoute:ActivatedRoute, public userservice:UserService,public router:Router,private authService:AuthentificationService) {
    this.id=activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.userservice.getUser(this.id).subscribe(dataUser=>{
      this.user=JSON.parse(JSON.stringify(dataUser));
    },err=>{
      console.log(err);
      this.authService.logout();
      this.router.navigateByUrl('/login');

    });
    this.userservice.getFonctions().subscribe(data=>{
      this.fonctions=JSON.parse(JSON.stringify(data));
    },err=>{
      console.log(err);
      this.authService.logout();
      this.router.navigateByUrl('/login');

    });
  }

}
