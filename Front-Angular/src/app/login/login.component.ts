import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-article-list',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private spinner: NgxSpinnerService) {}
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
    this.spinner.show();
    const {email, password} = this.form;
    if(this.form =! null) {
    console.log(email);
    console.log(password);
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigateByUrl('');
      
    }, 2000);
    console.log("ok");
    }
  }
}
