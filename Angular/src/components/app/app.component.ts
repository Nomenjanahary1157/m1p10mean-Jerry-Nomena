
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import 'bootstrap/dist/css/bootstrap.min.css';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true 
})
export class AppComponent {
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
