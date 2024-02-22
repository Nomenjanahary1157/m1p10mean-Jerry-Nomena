import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css']
})
export class DragdropComponent {
  isLoading: boolean = false;

  constructor(private router: Router) {}

  todo: string[] = [
    'La manucure classique',
    'La manucure classique express',
    'La manucure brésilienne',
    'La manucure japonaise',
    'La manucure russe'
  ];
  done: string[] = [];
  personListe: string[] = ['Jeanne','Jean'];
  personnel: string[] = [];
  reservationDate: string = '';
  reservationTime: string = '';

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  submitReservation() {
    this.isLoading = true; 

    const date = this.reservationDate;
    const time = this.reservationTime;
    const doneItems = this.done;
    const person = this.personnel;

    console.log('Date de réservation:', date);
    console.log('Heure de réservation:', time);
    console.log('Articles commandés:', doneItems);
    console.log('personnel choisi:', person);

    setTimeout(() => {
      this.isLoading = false; 
      this.router.navigateByUrl('/rendezvous');
    }, 2000); 
  }
}
