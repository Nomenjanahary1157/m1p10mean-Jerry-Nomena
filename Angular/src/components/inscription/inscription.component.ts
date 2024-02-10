import { Component } from '@angular/core';
import { Router } from '@angular/router';
import 'bootstrap/dist/css/bootstrap.min.css';

@Component({
  selector: 'app-root',
  templateUrl: '../inscription/inscription.component.html',
  styleUrls: ['../inscription/inscription.component.css'],
})

export class InscriptionComponent {
  constructor(public router: Router) {}
  goToInscription() {
    this.router.navigate(['/inscription']);
  }
}
