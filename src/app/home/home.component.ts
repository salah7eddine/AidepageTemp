import { Component, OnInit } from '@angular/core';
//import {Popup} from "ng2-opd-popup/index";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  infos={
    name:'med',
    email:'med@gmail.com'
  };

  comments=[
    {date:new Date(),message:"A"},
    {date:new Date(),message:"B"},
    {date:new Date(),message:"C"},
    {date:new Date(),message:"D"}
  ];

  commentaire={date:null,message:""};

//private popup:Popup
  constructor() { }

  ngOnInit() {
  }

 /* ClickButton(){
    this.popup.show();
  }*/

  onAddCommentaire(){
    this.commentaire.date=new Date();
    this.comments.push(this.commentaire);
    this.commentaire={date:null,message:""};
  }

}
