import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  constructor(private dialogRef: MatDialogRef<UpdateComponent>) {}

  closeModal(): void {
    this.dialogRef.close();
  }

}
