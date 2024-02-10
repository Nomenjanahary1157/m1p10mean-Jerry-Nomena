import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
