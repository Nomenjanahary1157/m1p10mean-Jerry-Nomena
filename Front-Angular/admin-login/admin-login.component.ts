import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  form: any = {
    recherche: null,
  };

  showEmptyAlert: boolean = false;
  showNotFoundAlert: boolean = false;
  
  constructor(private router: Router) {}

  goToAdminLog() {
    this.router.navigate(['/adminLog']);
  }

}
