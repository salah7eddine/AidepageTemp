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
import {ChantierService} from "../services/chantier/Chantier.service";
import {HttpModule} from "@angular/http";
import { ListChantiersComponent } from './list-chantiers/list-chantiers.component';
import { EditChantierComponent } from './edit-chantier/edit-chantier.component';
import {TypeChantiesService} from "../services/chantier/TypeChanties.service";
import {EntrepriseStService} from "../services/chantier/EntrepriseSt.service";
import {ServiceService} from "../services/chantier/Service.service";
import { MailboxComponent } from './mailbox/mailbox.component';
import {VisiteService} from "../services/chantier/VisiteHS.service";
import {UserService} from "../services/user/user.service";
import {DocumentChantierService} from "../services/doc/DocumentChantier.service";
import {AmenagementChantierService} from "../services/chantier/AmenagementChantier.service";
import {HygienePropreteService} from "../services/chantier/HygieneProprete.service";
import {BalisationSignalisationService} from "../services/chantier/BalisationSignalisation.service";
import {RqsService} from "../services/chantier/Rqs.service";
import {EpcEpiService} from "../services/chantier/EpcEpi.service";
import {AttitudeUrgenceService} from "../services/chantier/AttitudeUrence.service";
import {CompteRenduService} from "../services/doc/CompteRendu.service";
import {ObservationService} from "../services/chantier/Observation.service";
import {TypeObservationService} from "../services/chantier/TypeObseravtions.service";
import { NouveauUserComponent } from './nouveau-user/nouveau-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import {ActionChantierService} from "../services/chantier/ActionChantierService";
import { AuthentificationComponent } from './authentification/authentification.component';
import {AuthentificationService} from "../services/user/authentification.service";
import {HttpClientModule} from "@angular/common/http";


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
  {path:'nouveauUser',component:NouveauUserComponent},
  {path:'listUsers',component:ListUsersComponent},
  {path:'editUser/:id',component:EditUserComponent},
  {path:'login',component:AuthentificationComponent},
  {path: '',redirectTo:'/login',pathMatch:'full'}

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
    MailboxComponent,
    NouveauUserComponent,
    ListUsersComponent,
    EditUserComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),FormsModule,HttpModule,HttpClientModule
  ],
  providers: [
    ChantierService,
    TypeChantiesService,
    EntrepriseStService,
    ServiceService,
    VisiteService,
    UserService,
    DocumentChantierService,
    AmenagementChantierService,
    HygienePropreteService,
    BalisationSignalisationService,
    RqsService,
    EpcEpiService,
    AttitudeUrgenceService,
    CompteRenduService,
    ObservationService,
    TypeObservationService,
    ActionChantierService,
    AuthentificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
