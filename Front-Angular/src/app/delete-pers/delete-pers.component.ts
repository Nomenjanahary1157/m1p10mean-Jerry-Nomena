import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-pers',
  templateUrl: './delete-pers.component.html',
  styleUrls: ['./delete-pers.component.css']
})
export class DeletePersComponent {

  selectedRows: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DeletePersComponent>
  ) {
  
    this.selectedRows = data.selectedRows;
    console.log(this.selectedRows);
  }

  closeModal(): void {
    this.dialogRef.close();
  }

}
