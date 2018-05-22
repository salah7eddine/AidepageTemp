import {Component, OnInit} from "@angular/core";
import {AuthentificationService} from "../../services/user/authentification.service";
import {Router} from "@angular/router";
import {User} from "../../model/user/User.model";
import {Fonction} from "../../model/user/Fonction.model";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent implements OnInit {

  private name:string="";
  private email:string="";
  private fonction:string="";
  private dateCreation:any=null;
  private user:User=new User(new Fonction());
  //private user:any=null;

  constructor(private  authService:AuthentificationService,private router:Router,private userService:UserService) { }

  ngOnInit() {
    this.getUser();
  }

  onLogout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  getUser(){
    this.name=localStorage.getItem('username');
    this.userService.getUserByName(this.name).subscribe(data=>{
     this.user=JSON.parse(JSON.stringify(data));
    },err=>{
      console.log(err);
    });

  }

}
