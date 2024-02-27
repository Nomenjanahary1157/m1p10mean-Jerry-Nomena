import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteComponent } from '../delete/delete.component';
import { UpdateComponent } from '../update/update.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-gestion-personnelle',
  templateUrl: './gestion-personnelle.component.html',
  styleUrls: ['./gestion-personnelle.component.css']
})
export class GestionPersonnelleComponent {
  constructor(private router: Router,private dialog: MatDialog) {}
  goToGestionPersonnel() {
    this.router.navigate(['/gestionPersonnel']);
  }
  openModal(): void {
    this.dialog.open(DeleteComponent);
  }
  updateModal(): void {
    this.dialog.open(UpdateComponent);
  }
  inputFields: any[] = [];

  addInputField(): void {
    this.inputFields.push({});
  }

  removeInputField(index: number): void {
    this.inputFields.splice(index, 1);
  }
}
