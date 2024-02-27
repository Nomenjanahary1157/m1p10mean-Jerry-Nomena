import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  constructor(private dialogRef: MatDialogRef<DeleteComponent>) {}

  closeModal(): void {
    this.dialogRef.close();
  }
}
