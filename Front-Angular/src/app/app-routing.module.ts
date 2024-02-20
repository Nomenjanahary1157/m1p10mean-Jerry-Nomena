import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { GestionPersonnelleComponent } from './gestion-personnelle/gestion-personnelle.component';
import { GestionServiceComponent } from './gestion-service/gestion-service.component';
import { RendezvousComponent } from './historiquerendezvous/rendezvous.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { RendezvousEmployerComponent } from './rendezvous-employer/rendezvous-employer.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';

const routes: Routes = [
  {
     path : '' , component : AcceuilComponent
  },
  {
    path : 'gestionPers' , component : GestionPersonnelleComponent
  },
  {
    path : 'gestionService' , component : GestionServiceComponent
  },
  {
    path : 'rendezvous' , component : RendezvousComponent
  },
  {
    path : 'inscription' , component : InscriptionComponent
  },
  {
    path : 'login' , component : LoginComponent
  },
  {
    path : 'rendezvousEmployer' , component : RendezvousEmployerComponent
  },
  {
    path : 'dragDrop' , component : DragdropComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule {


 }
