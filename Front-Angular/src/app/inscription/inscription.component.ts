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
    const id = 5;
    const { username, nom, prenom, password, password2, argent } = this.form;
    console.log(username);
    console.log(nom);
    console.log(prenom);
    console.log(password);
    console.log(password2);
    console.log(argent);
    if (password === password2) {
      this.service.inscription(id, nom, prenom, username, password, argent).subscribe(
        (response) => {
          console.log(response); 
          this.router.navigate(['/login']); 
        },
        (error) => {
          console.error(error); 
          this.router.navigate(['/inscription']); 
        }
      );
    }
  }
}
