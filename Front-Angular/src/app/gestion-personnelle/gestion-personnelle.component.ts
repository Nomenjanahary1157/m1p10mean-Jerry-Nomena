import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-personnelle',
  templateUrl: './gestion-personnelle.component.html',
  styleUrls: ['./gestion-personnelle.component.css']
})
export class GestionPersonnelleComponent {
  constructor(private router: Router) {}
  goToGestionPersonnel() {
    this.router.navigate(['/gestionPersonnel']);
  }
}
