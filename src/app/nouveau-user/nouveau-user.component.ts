import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";
import {AuthentificationService} from "../../services/user/authentification.service";

@Component({
  selector: 'app-nouveau-user',
  templateUrl: './nouveau-user.component.html',
  styleUrls: ['./nouveau-user.component.css']
})
export class NouveauUserComponent implements OnInit {

  fonctions:any = null;
  base64textString: string;

  constructor(public userservice:UserService,public router:Router,private authService:AuthentificationService) { }

  ngOnInit() {
    this.userservice.getFonctions().subscribe(data=>{
      this.fonctions=JSON.parse(JSON.stringify(data));
    },err=>{
      console.log(err);
      this.authService.logout();
      this.router.navigateByUrl('/login');
    });

  }

  handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
  }

  onSaveUser(dataForm){
    if(dataForm.password==dataForm.password2){

      this.userservice.saveVisiteur(dataForm).subscribe(data=>{
        console.log(data);
      },err=>{
        console.log(JSON.parse(err._body).message);
      });
    }else{
      alert("vérifier le mot de passe");
    }
  }


}
