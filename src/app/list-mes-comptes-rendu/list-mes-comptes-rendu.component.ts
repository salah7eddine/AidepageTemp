import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {VisiteService} from "../../services/chantier/VisiteHS.service";
import {Router} from "@angular/router";
import {UserService} from "../../services/user/user.service";
import {User} from "../../model/user/User.model";
import {Subject} from "rxjs/Rx";
import {CompteRendu} from "../../model/doc/CompteRendu.model";
import {CompteRenduService} from "../../services/doc/CompteRendu.service";
import {VisiteHs} from "../../model/chantier/VisiteHs.model";

@Component({
  selector: 'app-list-mes-comptes-rendu',
  templateUrl: './list-mes-comptes-rendu.component.html',
  styleUrls: ['./list-mes-comptes-rendu.component.css']
})
export class ListMesComptesRenduComponent implements OnInit {
  name:any=null;
  user:User=null;
  pageVisite:any=[];
  visite:VisiteHs=null;
  compteRendu:CompteRendu=null;
  // Must be declared as "any", not as "DataTables.Settings"
  dtOptions: any = {};
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();
  constructor(public http:Http,public userService:UserService,public visiteService:VisiteService,public router:Router,public compteRenduService:CompteRenduService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',// pagination related buttons
      pageLength: 7,// default page length
      language: {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
      },
      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      // Configure the buttons
      buttons: [
        //'columnsToggle',
        'colvis',
        'csv',
        'pdf',
        'copy',
        'print',
        'excel',
       /* {
          text: 'Some button',
          key: '1',
          action: function (e, dt, node, config) {
            alert('Button activated');
          }
        }*/
      ]

    };
    this.name=localStorage.getItem('username');
    this.userService.getUserByName(this.name).subscribe(data=>{
      this.user=JSON.parse(JSON.stringify(data));
      this.visiteService.getMyVisite(this.user.id_user).subscribe(data=>{
        this.pageVisite=data;
        this.dtTrigger.next();
      },err=>{
        console.log(err);
      });
    },err=>{
      console.log(err);
    });
    // Use this attribute to enable the responsive extension
    //responsive: true
  }
  show(id:number){
    this.router.navigate(['/infosCompteRendu',id]);
  }

  valid(id:number){
      this.visiteService.getVisite(id).subscribe(data=>{
        this.visite=JSON.parse(JSON.stringify(data));
        this.compteRendu=this.visite.compteRendu;
        console.log(this.compteRendu);
        this.compteRenduService.updateCompteRenduByEtat(this.compteRendu).subscribe(data=>{
          console.log(data);
          this.router.navigateByUrl("/listMesComptesRendu");
        })
      },err=>{
        console.log(err);
      })
  }


}
