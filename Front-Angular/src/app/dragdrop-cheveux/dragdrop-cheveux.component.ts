import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dragdrop-cheveux',
  templateUrl: './dragdrop-cheveux.component.html',
  styleUrls: ['./dragdrop-cheveux.component.css']
})
export class DragdropCheveuxComponent {
  constructor(private router: Router) {}
    
    todo: string[] = [
        'Carré plongeant',
        'Tresse Pour Cheveux',
        'Coupe courte avec frange',
        'Coupe courte ondulée',
        'Coupe dégradée cheveux longs',
        'Coupe avec Natte',
        'Cheveux bouclés',
        'Cheveux frisés'
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

