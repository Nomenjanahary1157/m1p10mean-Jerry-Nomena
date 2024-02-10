import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rendezvous',
  standalone: true,
  imports: [],
  templateUrl: './rendezvous.component.html',
  styleUrl: './rendezvous.component.css'
})
export class RendezvousComponent {
  constructor(private router: Router) {}
  goToHistoriqueRendezVous() {
    this.router.navigate(['/historiquerendezvous']);
  }
}
