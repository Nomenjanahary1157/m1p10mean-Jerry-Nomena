import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  // newNomService :string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<UpdateComponent>) {}
  
  closeModal(): void {
    this.dialogRef.close();
  }

  // update(): void {
  //   // Vous pouvez utiliser this.newNomService pour accéder à la nouvelle désignation
  //   console.log('Nouvelle désignation :', this.newNomService);

  //   // Fermez le dialogue avec les données mises à jour si nécessaire
  //   this.dialogRef.close(/* données mises à jour */);
  // }

}
