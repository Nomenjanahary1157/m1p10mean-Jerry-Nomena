import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  showRDVAlert: boolean = true;
  showNotFoundAlert: boolean = false;
  
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.showRDVAlert = false; 
    }, 5000);
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
    const manucureServices: string[] = [
      'La manucure classique',
      'La manucure classique express',
      'La manucure brésilienne',
      'La manucure japonaise',
      'La manucure russe'
    ];

    if (manucureServices.includes(recherche)) {
      this.router.navigateByUrl('/dragDrop');
      return true;
    }
    return false;
  }

  rechercherPedicure(recherche: string): boolean {
    const pedicureServices: string[] = [
      'BLANC CRAIE',
      'RENCH PÉDICURE',
      'ONGLES ROUGES.',
      'VERT ACIDE',
      'JAUNE FLUO',
      'MAINS ET PIEDS DÉPAREILLÉS'
    ];

    if (pedicureServices.includes(recherche)) {
      this.router.navigateByUrl('/dragDropPeducure');
      return true;
    }
    return false;
  }

  rechercherCheveux(recherche: string): boolean {
    const cheveuxServices: string[] = [
      'Carré plongeant',
      'Tresse Pour Cheveux',
      'Coupe courte avec frange',
      'Coupe courte ondulée',
      'Coupe dégradée cheveux longs',
      'Coupe avec Natte',
      'Cheveux bouclés',
      'Cheveux frisés'
    ];

    if (cheveuxServices.includes(recherche)) {
      this.router.navigateByUrl('/dragDropCheveux');
      return true;
    }
    return false;
  }

}
