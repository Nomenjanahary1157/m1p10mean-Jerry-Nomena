import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeletePersComponent } from '../delete-pers/delete-pers.component';
import { UpdatePersComponent } from '../update-pers/update-pers.component';
import { MatDialog } from '@angular/material/dialog';
import { ServiceService } from '../service.service';



@Component({
  selector: 'app-gestion-personnelle',
  templateUrl: './gestion-personnelle.component.html',
  styleUrls: ['./gestion-personnelle.component.css']
})

export class GestionPersonnelleComponent {
  todo: any[] = [];
  serv: any[] = [];

  selectedRows: any[] = []; 

  

  constructor(private router: Router,private dialog: MatDialog,private service: ServiceService) {}

  form : any = {
    nomEmployer : null,
    prenomEmployer : null,
    salaire : null,
    dateEmbauche : null,
  }

  goToGestionPersonnel() {
    this.router.navigate(['/gestionPersonnel']);
  }
  openModal(): void {
    this.dialog.open(DeletePersComponent, {
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
  updateModal(idEmployer:any,nomEmployer:string ,prenomEmployer: string, salaire:number,dateEmbauche:Date): void {
    const dialogRef = this.dialog.open(UpdatePersComponent, {
      data: { idEmployer:idEmployer, nomEmployer:nomEmployer,prenomEmployer: prenomEmployer, salaire:salaire, dateEmbauche:dateEmbauche }
  
    });
  }
  inputFields: any[] = [];

  addInputField(): void {
    this.inputFields.push({});
  }

  removeInputField(index: number): void {
    this.inputFields.splice(index, 1);
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
      this.service.getEmployer().subscribe(data => {
          this.todo = data;
          console.table(this.todo)
      });
      this.service.getService().subscribe(data => {
        this.serv = data;
        // console.table(this.todo)
    });
  }

  add() {
    const { nomEmployer, prenomEmployer, salaire, dateEmbauche } = this.form;
  
    const idEmployer = 5;
  
    this.service.addEmployer(idEmployer, nomEmployer, prenomEmployer, salaire, dateEmbauche).subscribe(
      (response) => {
        console.log(response); 
        this.router.navigate(['/gestionPers']); 
      },
      (error) => {
        console.error(error); 
        this.router.navigate(['/gestionPers']); 
      }
    );
  }
  
  
  
}
