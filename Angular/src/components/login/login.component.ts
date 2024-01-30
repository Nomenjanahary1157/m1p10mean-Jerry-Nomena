import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../models/utilisateur.model';
import { UtilisateurService } from '../../services/utilisateur.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Utilisateur: Utilisateur[] = [];

  constructor(private UtilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.loadUtilisateurs();
  }

  loadUtilisateurs(): void {
    this.UtilisateurService.getUtilisateurs().subscribe(
      (data: Utilisateur[]) => {
        this.Utilisateur = data;
      },
      (error) => {
        console.error('Error loading Utilisateurs:', error);
      }
    );
  }
}
