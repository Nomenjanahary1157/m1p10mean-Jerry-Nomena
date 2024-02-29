import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../delete/delete.component';
import { UpdateComponent } from '../update/update.component';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-gestion-service',
  templateUrl: './gestion-service.component.html',
  styleUrls: ['./gestion-service.component.css']
})

export class GestionServiceComponent {

todo: any[] = [];
datas : any;
selectedRows: any[] = []; 

  constructor(private router: Router,private dialog: MatDialog,private service: ServiceService) {}
  goToGestionServicel() {
    this.router.navigate(['/gestionServicel']);
  }

  openModal(): void {
    this.dialog.open(DeleteComponent, {
      data: { selectedRows: this.selectedRows }
    });
  }

  onCheckboxChange(item: any): void {
    item.isChecked = !item.isChecked;
    if (item.isChecked) {
      this.selectedRows.push(item);
    } else {
      const index = this.selectedRows.findIndex(selectedItem => selectedItem.idService === item.idService);
      if (index !== -1) {
        this.selectedRows.splice(index, 1);
      }
    }
  }
  updateModal(idService:any, nomOption: string, dure:number, nomService: string, prix:number): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      data: { idService:idService, nomOption: nomOption,nomService: nomService,dure:dure, prix:prix }
  
    });
  }
  
  ngOnInit() {
    this.loadData();
  }

  loadData() {
      this.service.getService().subscribe(data => {
          this.todo = data;
          console.table(this.todo)
      });
  }

  form : any = {
    nomService : null,
    prenomService : null,
    salaire : null,
    prix : null,
    nomOption : null,

  }
  add() {
    const idService = 4;
    const { nomService, dure, prix,nomOption} = this.form;
    // console.log(nomService);
    // console.log(dure);
    // console.log(prix);
    // console.log(nomOption);

    if (nomService !== null && dure !== null && prix !== null && nomOption !== null) {
      this.service.addService(idService,nomService,dure, prix, nomOption).subscribe(
        (response) => {
          console.log(response); 
          this.router.navigate(['/gestionService']); 
        },
        (error) => {
          console.error(error); 
          this.router.navigate(['/gestionService']); 
        }
      );
    }
  }
}





