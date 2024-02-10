import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: '../acceuil/acceuil.component.html',
  styleUrls: ['../acceuil/acceuil.component.css'],
  standalone: true 
})

export class AppComponent {
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']); 
  }
}
