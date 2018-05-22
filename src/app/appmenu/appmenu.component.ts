import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../../services/user/authentification.service";

@Component({
  selector: 'app-appmenu',
  templateUrl: './appmenu.component.html',
  styleUrls: ['./appmenu.component.css']
})
export class AppmenuComponent implements OnInit {

  constructor(public authService:AuthentificationService) { }

  ngOnInit() {
  }

}
