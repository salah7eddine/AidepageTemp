import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";
import {Fonction} from "../../model/user/Fonction.model";
import {User} from "../../model/user/User.model";
import {HttpHeaders, HttpClient} from "@angular/common/http";
import {AuthentificationService} from "../../services/user/authentification.service";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  user:User=new User(new Fonction())
  pageUsers:any=null;
  motCle:string="";
  currentPage:number=0;
  size:number=5;
  pages:Array<number>;
  users:any=null;

  constructor(public http:HttpClient,public userService:UserService,public router:Router,private authService:AuthentificationService) { }

  ngOnInit() {
    this.userService.getusers().subscribe(data=>{
      this.users=JSON.parse(JSON.stringify(data));
    },err=>{
      this.authService.logout();
      this.router.navigateByUrl('/login');
      console.log(err);
    })
  }


  doSearch(){
    this.userService.getUsers(this.motCle,this.currentPage, this.size).subscribe(data=>{
      this.pageUsers=JSON.parse(JSON.stringify(data));
      this.pages=new Array(JSON.parse(JSON.stringify(data)).totalPages);
    },err=>{
      console.log(err);
      this.authService.logout();
      this.router.navigateByUrl('/login');
    })
  }

  chercherUsers(){
    this.doSearch();
  }

  gotoPage(i:number){
    this.currentPage=i;
    this.doSearch();
  }

  onEditUser(id:number){

    console.log("-----------------------");
    console.log(id);
    this.router.navigate(['editUser',id]);
  }

  onDeleteUser(u:User){

    let confirm=window.confirm('Etez-vous sure?');

    if(confirm==true){
      this.userService.deleteUser(u.id_user).subscribe(data=>{
        this.pageUsers.content.splice(
          this.pageUsers.content.indexof(u),1
        );
      },err=>{
        console.log(err);
        this.authService.logout();
        this.router.navigateByUrl('/login');
      })
    }

  }


}
