import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.css']
})
export class RendezvousComponent implements OnInit {
  
  rendezVousData: any[] = []; 
  clients: any[] = [];
  employes: any[] = [];

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.service.getRendezVous().subscribe(
      (data: any[]) => {
        this.rendezVousData = data; 
        this.rendezVousData.forEach(rdv => {
          console.log(rdv._id);
          this.service.getClientbyID(rdv.idClient).subscribe(client => {
            this.clients.push(client);
          });
          this.service.getEmployerbyID(rdv.idServEmployer).subscribe(employe => {
            this.employes.push(employe);
          });
        });
        console.log(this.clients);
        console.log(this.employes);

      },
      error => {
        console.error('Erreur lors de la récupération des rendez-vous : ', error);
      }
    );
  }
}
