import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-root',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})

export class InscriptionComponent {

  constructor(public router: Router,private service: ServiceService) {}
  form : any = {
    username : null,
    nom : null,
    prenom : null,
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
    const { username, nom, prenom, password, password2 } = this.form;
    console.log(username);
    console.log(nom);
    console.log(prenom);
    console.log(password);
    console.log(password2);
    if (password === password2) {
      this.service.inscription(nom, prenom,username, password);
      this.router.navigate(['/login']);
    }
  }

}
