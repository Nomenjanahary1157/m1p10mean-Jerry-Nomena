import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  form: any = {
    recherche: null,
  };

  showEmptyAlert: boolean = false;
  showRDVAlert: boolean = false;
  showNotFoundAlert: boolean = false;
  showPromotionAlert: boolean = false;
  userconnected : any;
  clientAsNumber: number | undefined;

  
  constructor(private router: Router, private service: ServiceService) {
    this.userconnected = this.service.isConnected;
    this.clientAsNumber = parseInt(this.userconnected.client, 10);
  }

  ngOnInit() {
    this.showRDVAlert = true;
    setTimeout(() => {
        this.showRDVAlert = false;
        this.showPromotionAlert = true;
        setTimeout(() => {
            this.showPromotionAlert = false;
        }, 15000);
    }, 5000);
    this.userconnected = this.service.isConnected;
    console.table(this.userconnected);
  }

  logout() {
    this.service.logout();
    this.router.navigate(['/login']);
  }

  
  rechercher() {
    const { recherche } = this.form;

    if (!recherche) {
      this.showEmptyAlert = true;
      this.showNotFoundAlert = false;
      return;
    } else {
      this.showEmptyAlert = false;
    }

    if (!this.rechercherManucure(recherche) && !this.rechercherPedicure(recherche) && !this.rechercherCheveux(recherche)) {
      this.showNotFoundAlert = true;
    } else {
      this.showNotFoundAlert = false; 
    }

    if (this.rechercherManucure(recherche)) return;
    if (this.rechercherPedicure(recherche)) return;
    if (this.rechercherCheveux(recherche)) return;
  }

  rechercherManucure(recherche: string): boolean {
      let manucureServices: string[] = [];
      let result: boolean = false;
      this.service.getManucure().subscribe(data => {
      manucureServices = data.map((item: { nomOption: any; }) => item.nomOption);

      if (manucureServices.includes(recherche) || recherche == 'manucure' || recherche == 'Manucure') {
          this.router.navigateByUrl('/dragDrop');
          result = true;
      } else {
        result = false;
      }
    });
  return result;
  }

  rechercherPedicure(recherche: string): boolean {
    let pedicureServices: string[] = [];
      let result: boolean = false;
      this.service.getPeducure().subscribe(data => {
        pedicureServices = data.map((item: { nomOption: any; }) => item.nomOption);

      if (pedicureServices.includes(recherche) || recherche == 'péducure' || recherche == 'Péducure' || recherche == 'Peducure' || recherche == 'peducure') {
          this.router.navigateByUrl('/dragDropPeducure');
          result = true;
      } else {
        result = false;
      }
    });
  return result;
  }

  rechercherCheveux(recherche: string): boolean {
    let cheveuxServices: string[] = [];
      let result: boolean = false;
      this.service.getCoiffure().subscribe(data => {
        cheveuxServices = data.map((item: { nomOption: any; }) => item.nomOption);

      if (cheveuxServices.includes(recherche) || recherche == 'coiffure' || recherche == 'Coiffure' || recherche == 'Cheveux' || recherche == 'cheveux') {
          this.router.navigateByUrl('/dragDropCheveux');
          result = true;
      } else {
        result = false;
      }
    });
  return result;
  }

}
