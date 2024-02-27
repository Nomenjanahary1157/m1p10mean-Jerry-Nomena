import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../delete/delete.component';
import { UpdateComponent } from '../update/update.component';


@Component({
  selector: 'app-gestion-service',
  templateUrl: './gestion-service.component.html',
  styleUrls: ['./gestion-service.component.css']
})
export class GestionServiceComponent {
  constructor(private router: Router,private dialog: MatDialog) {}
  goToGestionServicel() {
    this.router.navigate(['/gestionServicel']);
  }
  openModal(): void {
    this.dialog.open(DeleteComponent);
  }
  updateModal(): void {
    this.dialog.open(UpdateComponent);
  }
}
