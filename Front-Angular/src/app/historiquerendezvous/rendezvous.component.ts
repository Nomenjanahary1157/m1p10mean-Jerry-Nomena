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
    services: any[] = [];
    userconnected: any;
    rendezVousDate: Date | undefined;
    constructor(private service: ServiceService) {}

    ngOnInit(): void {
        this.userconnected = this.service.isConnected;
        const clientAsNumber: number = parseInt(this.userconnected.client, 10);
        console.table(this.userconnected.client);
        
        this.service.getRendezVousByClient(clientAsNumber).subscribe(
            (data: any[]) => {
                this.rendezVousData = Object.values(data);
                console.table(this.rendezVousData);
                this.rendezVousDate =this.rendezVousData[0]?.date;
                console.log(this.rendezVousDate);
                this.service.getClientbyID(clientAsNumber).subscribe(client => {
                        this.clients.push(client);
                        console.table(this.clients);
                    });

                    this.service.getServEmployerbyID(1).subscribe(servemploye => {
                        this.servemployes.push(servemploye);
                        const objetJSON = JSON.stringify(this.servemployes[this.servemployes.length - 1]);
                        const parsedObject = JSON.parse(objetJSON);
                        const idEmployer = parsedObject.idEmployer;

                    this.service.getEmployerbyID(idEmployer).subscribe(employe => {
                        this.employes.push(employe);
                    });

                    this.service.getServicerbyID(idEmployer).subscribe(servic => {
                        this.services.push(servic);
                    });

                  });
            },
            error => {
                console.error('Erreur lors de la récupération des rendez-vous : ', error);
            }
        );
    }
}
