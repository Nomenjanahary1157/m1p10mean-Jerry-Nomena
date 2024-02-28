import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { ServiceService } from '../service.service';
import { data } from 'jquery';

@Component({
  selector: 'app-article-list',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  isConnected: boolean = false;
  constructor(private router: Router, private service: ServiceService) {}
  form : any = {
    email : null,
    password : null,
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
  login() {
    const {email, password} = this.form;
    console.log(email);
    console.log(password);
    if(this.form =! null) {
      this.service.connexion(email,password).subscribe(data => {
      if(data =! null) {
        this.user = data;
        this.isConnected = true;
        this.router.navigate(['/']);
      }
      if(data == null) {
        this.isConnected = false;
        this.router.navigate(['/login']);
      }
      } );
    }
  }
}
