import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dragdrop',
    templateUrl: './dragdrop-pedicure.component.html',
    styleUrls: ['./dragdrop-pedicure.component.css']
})
export class DragdropPedicureComponent {
  constructor(private router: Router) {}
    
    todo: string[] = [
        'BLANC CRAIE',
        'RENCH PÉDICURE',
        'ONGLES ROUGES.',
        'VERT ACIDE',
        'JAUNE FLUO',
        'MAINS ET PIEDS DÉPAREILLÉS'
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
        const date = this.reservationDate;
        const time = this.reservationTime;
        const doneItems = this.done;
        const person = this.personnel;

        console.log('Date de réservation:', date);
        console.log('Heure de réservation:', time);
        console.log('Articles commandés:', doneItems);
        console.log('personnel choisi:', person);

      this.router.navigateByUrl('/rendezvous');
    }
}

