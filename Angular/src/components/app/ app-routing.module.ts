import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { InscriptionComponent } from '../inscription/inscription.component';
import { AcceuilComponent } from '../acceuil/acceuil.component';
import { DragdropComponent } from '../dragdrop/dragdrop.component';
import { GestionPersonnelleComponent } from '../gestion-personnelle/gestion-personnelle.component';
import { GestionServiceComponent } from '../gestion-service/gestion-service.component';
import { RendezvousComponent } from '../historiquerendezvous/rendezvous.component';
import { RendezvousEmployerComponent } from '../rendezvous-employer/rendezvous-employer.component';
import { ReservationComponent } from '../reservation/reservation.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'dragdrop', component: DragdropComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'gestion-service', component: GestionServiceComponent },
  { path: 'historique-rendezvous', component: RendezvousComponent },
  { path: 'rendezvous-employer', component: RendezvousEmployerComponent },
  { path: 'gestion-personnelle', component: GestionPersonnelleComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
