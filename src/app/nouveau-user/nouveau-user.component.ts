import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user/User.model";
import {UserService} from "../../services/user/user.service";
import {Fonction} from "../../model/user/Fonction.model";

@Component({
  selector: 'app-nouveau-user',
  templateUrl: './nouveau-user.component.html',
  styleUrls: ['./nouveau-user.component.css']
})
export class NouveauUserComponent implements OnInit {

  public newUser:User=new User(new Fonction());
  fonctions:any = null;
  base64textString: string;

  constructor(public userservice:UserService) { }

  ngOnInit() {
    this.userservice.getFonctions().subscribe(data=>{
      this.fonctions=JSON.parse(JSON.stringify(data));
    },err=>{
      console.log(err);
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
      this.newUser.pseudoName=dataForm.pseudoName;
      this.newUser.email=dataForm.email;
      this.newUser.num=dataForm.num;
      this.newUser.password=dataForm.password;
      this.newUser.dateCreation=new Date();
      this.newUser.photo=this.base64textString;
      this.newUser.fonction=dataForm.fonction;

      console.log(this.newUser);
      this.userservice.saveVisiteur(this.newUser).subscribe(data=>{
        console.log(data);
      },event=>{
        console.log(event);
      });
      console.log(dataForm);
    }else{
      alert("vérifier le mot de passe");
    }
  }


}
