import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rendezvous-employer',
  standalone: true,
  imports: [],
  templateUrl: './rendezvous-employer.component.html',
  styleUrl: './rendezvous-employer.component.css'
})
export class RendezvousEmployerComponent {
  constructor(private router: Router) {}
  goToRendezVousEmployer() {
    this.router.navigate(['/rendezvousemployer']);
  }
}
