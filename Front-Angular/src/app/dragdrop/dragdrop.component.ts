import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css']
})
export class DragdropComponent {
  isLoading: boolean = false;
  todo: any[] = [];
  done: any[] = [];
  personListe: any[] = [];
  personnel: any[] = [];
  userconnected: any;
  clientAsNumber: number | undefined;
  lastServEmployerId: any;
  idServEmployer: number = 8;
  idRdv: number = 8;

  constructor(
    private router: Router, 
    private service: ServiceService,
  ) {
    this.userconnected = this.service.isConnected;
    this.clientAsNumber = parseInt(this.userconnected.client, 10);
  }

  ngOnInit() {
    this.loadData();
    this.loadUser();
  }

  loadData() {
    this.service.getManucure().subscribe(data => {
      this.todo = data;
    });
  }

  loadUser() {
    this.service.getEmployer().subscribe(data => {
      this.personListe = data;
      console.table(this.personListe);
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

    const fullDate = new Date(date + 'T' + time);
    const isoDate = fullDate.toISOString();
    console.log(isoDate);

    const doneItems = this.done;

    const ids = doneItems.map(item => Number(item.idService));
    const prices = doneItems.map(item => item.prix);

    const person = this.personnel;
    const idEmployer = person.map(item => item.idEmployer);

    const idService = ids[0]; 
    const idEmployerSingle = idEmployer[0];

    console.log("idEmployer :" + idEmployerSingle); 
    console.log("idService :" + idService); 
    console.log("prix :" + prices); 
    console.log("userId: " + this.clientAsNumber);

    const totalPrix = prices.reduce((acc, current) => acc + current, 0);
    console.log("totalPrix: "+ totalPrix);

    setTimeout(() => {

      this.service.insertServEmployer(this.idServEmployer, idService, idEmployerSingle)
        .subscribe(
          response => {
            console.log(response); 
            this.isLoading = false; 
          },
          error => {
            console.error(error); 
            this.isLoading = false; 
          }
        );

      if (this.clientAsNumber !== undefined) {
        this.service.insertRDV(this.idRdv, this.clientAsNumber, this.idServEmployer, fullDate)
          .subscribe(
            () => {
              console.log("Réservation insérée avec succès.");
            },
            error => {
              console.error("Erreur lors de l'insertion de la réservation :", error);
            }
          );

        this.service.updateArgent(this.clientAsNumber, totalPrix)
          .subscribe(
            response => {
              console.log(response); 
            },
            error => {
              console.error(error); 
            }
          );
      } else {
        console.error("clientAsNumber n'est pas défini.");
      }
      
      this.router.navigateByUrl('/rendezvous');
    }, 2000); 
  }
}
