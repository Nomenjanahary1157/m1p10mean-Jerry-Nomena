import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dragdrop-cheveux',
  templateUrl: './dragdrop-cheveux.component.html',
  styleUrls: ['./dragdrop-cheveux.component.css']
})
export class DragdropCheveuxComponent {
  isLoading: boolean = false;
  todo: any[] = [];
  done: any[] = [];
  personListe: any[] = [];
  personnel: any[] = [];

  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit() {
      this.loadData();
      this.loadUser();
  }

  loadData() {
      this.service.getCoiffure().subscribe(data => {
          this.todo = data;
      });
  }

  loadUser() {
      this.service.getEmployer().subscribe(data => {
          this.personListe = data;
          console.table(this.personListe)
      });
  }
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

