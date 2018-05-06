import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { AppfooterComponent } from './appfooter/appfooter.component';
import { AppmenuComponent } from './appmenu/appmenu.component';
import { AppsettingsComponent } from './appsettings/appsettings.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { CompteRenduComponent } from './NouveuCompteRendu/compte-rendu.component';
import { ListMesComptesRenduComponent } from './list-mes-comptes-rendu/list-mes-comptes-rendu.component';
import { ListComptesRenduComponent } from './list-comptes-rendu/list-comptes-rendu.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { NouveauChantierComponent } from './nouveau-chantier/nouveau-chantier.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ChantierService} from "../services/Chantier.service";
import {HttpModule} from "@angular/http";
import { ListChantiersComponent } from './list-chantiers/list-chantiers.component';
import { EditChantierComponent } from './edit-chantier/edit-chantier.component';
import {TypeChantiesService} from "../services/TypeChanties.service";
import {EntrepriseStService} from "../services/EntrepriseSt.service";
import {ServiceService} from "../services/Service.service";
import { MailboxComponent } from './mailbox/mailbox.component';
import {VisiteService} from "../services/VisiteHS.service";
import {UserService} from "../services/user.service";


const routes:Routes = [
  {path:'home',component:HomeComponent},
  {path:'compteRendu',component:CompteRenduComponent},
  {path:'listMesComptesRendu',component:ListMesComptesRenduComponent},
  {path:'listComptesRendu',component:ListComptesRenduComponent},
  {path:'nouveauChantier',component:NouveauChantierComponent},
  {path:'listChantiers',component:ListChantiersComponent},
  {path:'editChantier/:id',component:EditChantierComponent},
  {path:'documentation',component:DocumentationComponent},
  {path:'nouveauChantier',component:NouveauChantierComponent},
  {path:'mailbox',component:MailboxComponent},

  {path: '',redirectTo:'/home',pathMatch:'full'}

];



@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingsComponent,
    HomeComponent,
    CompteRenduComponent,
    ListMesComptesRenduComponent,
    ListComptesRenduComponent,
    DocumentationComponent,
    NouveauChantierComponent,
    ListChantiersComponent,
    EditChantierComponent,
    MailboxComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),FormsModule,HttpModule
  ],
  providers: [ChantierService,TypeChantiesService,EntrepriseStService,ServiceService,VisiteService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
