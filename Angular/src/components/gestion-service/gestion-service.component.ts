import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-service',
  standalone: true,
  imports: [],
  templateUrl: './gestion-service.component.html',
  styleUrl: './gestion-service.component.css'
})
export class GestionServiceComponent {
  constructor(private router: Router) {}
  goToGestionServicel() {
    this.router.navigate(['/gestionServicel']);
  }
}
