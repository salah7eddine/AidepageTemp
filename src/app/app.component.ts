import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from "../services/user/authentification.service";
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public authService:AuthentificationService){}

  ngOnInit() {
  }
}
