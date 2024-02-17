import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rendezvous-employer',
  templateUrl: './rendezvous-employer.component.html',
  styleUrls: ['./rendezvous-employer.component.css']
})
export class RendezvousEmployerComponent {
  constructor(private router: Router) {}
  goToRendezVousEmployer() {
    this.router.navigate(['/rendezvousemployer']);
  }
}
