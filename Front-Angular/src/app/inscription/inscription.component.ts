import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})

export class InscriptionComponent {

  constructor(public router: Router,private spinner: NgxSpinnerService) {}
  form : any = {
    email : null,
    password : null,
    password2 : null,
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  goToInscription() {
    this.router.navigate(['/inscription']);
  }
  inscription() {
    this.spinner.show();
    const {email, password, password2} = this.form;
    if(this.form =! null && password == password2) {
    console.log(email);
    console.log(password);
    console.log(password2);
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigateByUrl('/login');
      
    }, 2000);
    console.log("ok");
    }
  }

}
