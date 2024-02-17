import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.css']
})
export class RendezvousComponent {
  constructor(private router: Router) {}
  goToHistoriqueRendezVous() {
    this.router.navigate(['/historiquerendezvous']);
  }
}
