import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../../services/user/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent implements OnInit {

  constructor(private  authService:AuthentificationService,private router:Router) { }

  ngOnInit() {
  }

  onLogout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
