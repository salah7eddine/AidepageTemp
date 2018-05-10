import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthentificationService} from "../../services/user/authentification.service";

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(private authService:AuthentificationService, private router:Router) {
  }

  mode:number = 0;

  ngOnInit() {
    this.authService.logout();
  }

  onLogin(user) {
    console.log(user);
    this.authService.login(user).subscribe(resp => {
      let jwt = resp.headers.get('Authorization');
      this.authService.saveToken(jwt);
      this.mode = 0;
      this.router.navigateByUrl('/home');
    }, err => {
      console.log(err);
      this.mode = 1;
    });
  }

}
