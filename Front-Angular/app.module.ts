import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from "angular-datatables";
import { AcceuilComponent } from './acceuil/acceuil.component';
import { GestionPersonnelleComponent } from './gestion-personnelle/gestion-personnelle.component';
import { GestionServiceComponent } from './gestion-service/gestion-service.component';
import { RendezvousComponent } from './historiquerendezvous/rendezvous.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { RendezvousEmployerComponent } from './rendezvous-employer/rendezvous-employer.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragdropPedicureComponent } from './dragdrop-pedicure/dragdrop-pedicure.component';
import { DragdropCheveuxComponent } from './dragdrop-cheveux/dragdrop-cheveux.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    GestionPersonnelleComponent,
    GestionServiceComponent,
    RendezvousComponent,
    InscriptionComponent,
    LoginComponent,
    RendezvousEmployerComponent,
    DragdropComponent,
    DragdropPedicureComponent,
    DragdropCheveuxComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    NgbModule,
    DataTablesModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const base_url="https://api-garages.onrender.com/api";
