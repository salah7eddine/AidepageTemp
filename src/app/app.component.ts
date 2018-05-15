import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from "../services/user/authentification.service";
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isLoggedIn$:any=null;

  constructor(public authService:AuthentificationService){}

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    console.log(this.isLoggedIn$);
  }
}
