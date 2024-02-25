import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-service',
  templateUrl: './gestion-service.component.html',
  styleUrls: ['./gestion-service.component.css']
})
export class GestionServiceComponent {
  constructor(private router: Router) {}
  goToGestionServicel() {
    this.router.navigate(['/gestionServicel']);
  }
}
