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
  servemployes: any[] = [];
  idEmployer: number = 0; 
  nomEmployer: any; 
  nomService: any; 
  services : any[] = [];

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
          this.service.getServEmployerbyID(rdv.idServEmployer).subscribe(servemploye => {

            this.servemployes.push(servemploye);

            const objetJSON = JSON.stringify(this.servemployes[this.idEmployer]); 
            const parsedObject = JSON.parse(objetJSON); 
            const idEmployer = parsedObject.idEmployer; 

            this.service.getEmployerbyID(idEmployer).subscribe(employe => {
              this.employes.push(employe);
              console.log("employer : "); 
              console.table(employe); 
          });
          
            this.service.getServicerbyID(idEmployer).subscribe(servic => {
              this.services.push(servic);
              console.log("serv : ");
              console.table(servic); 
            });
            console.log(idEmployer); 
          });
        });
        console.log(this.clients);
      },
      error => {
        console.error('Erreur lors de la récupération des rendez-vous : ', error);
      }
    );
  }
}
