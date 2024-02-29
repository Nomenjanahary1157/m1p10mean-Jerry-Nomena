import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  selectedRows: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DeleteComponent>,
    private service: ServiceService,
    private router: Router 
  ) {
    this.selectedRows = data.selectedRows;
    this.selectedRows.forEach(row => {
      const id = row._id;
      this.service.deleteServiceById(id).subscribe(
        response => {
          console.log('Service supprimé avec succès', response);
        },
        error => {
          console.error('Erreur lors de la suppression du service', error);
        }
      );
      console.log('ID à supprimer:', id);
    });
    console.log(this.selectedRows);
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  okey() {
    this.router.navigate(['/gestionService']); 
  }
}
