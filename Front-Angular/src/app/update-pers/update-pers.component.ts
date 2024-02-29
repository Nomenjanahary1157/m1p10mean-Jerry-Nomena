import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-update-pers',
  templateUrl: './update-pers.component.html',
  styleUrls: ['./update-pers.component.css']
})
export class UpdatePersComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<UpdatePersComponent>) {}
  
  closeModal(): void {
    this.dialogRef.close();
  }

}
