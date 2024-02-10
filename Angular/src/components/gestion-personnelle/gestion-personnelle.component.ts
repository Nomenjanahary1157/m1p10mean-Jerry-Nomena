import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-personnelle',
  standalone: true,
  imports: [],
  templateUrl: './gestion-personnelle.component.html',
  styleUrl: './gestion-personnelle.component.css'
})
export class GestionPersonnelleComponent {
  constructor(private router: Router) {}
  goToGestionPersonnel() {
    this.router.navigate(['/gestionPersonnel']);
  }
}
