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
    services: any[] = [];
    userconnected: any;
    rendezVousDate: Date | undefined;

    constructor(private service: ServiceService) {}

    ngOnInit(): void {
        this.userconnected = this.service.isConnected;
        const clientAsNumber: number = parseInt(this.userconnected.client, 10);
        
        this.service.getRendezVousByClient(clientAsNumber).subscribe(
            (data: any[]) => {
                this.rendezVousData = data;
                
                this.rendezVousDate = this.rendezVousData[0]?.date;
                
                this.rendezVousData.forEach(rendezVous => {
                    const rendezVousDate = new Date(rendezVous.date);
                    if (!this.rendezVousDate || rendezVousDate > this.rendezVousDate) {
                        this.rendezVousDate = rendezVousDate;
                    }

                    const idServEmployer = rendezVous.idServEmployer;
    
                    this.service.getServicerbyID(idServEmployer).subscribe(servic => {
                        this.services.push(servic);
                    });
    
                    this.service.getEmployerbyID(idServEmployer).subscribe(employe => {
                        this.employes.push(employe);
                    });
                });
    
                this.service.getClientbyID(clientAsNumber).subscribe(client => {
                    this.clients.push(client);
                });
            },
            error => {
                console.error('Erreur lors de la récupération des rendez-vous : ', error);
            }
        );
    }
}
