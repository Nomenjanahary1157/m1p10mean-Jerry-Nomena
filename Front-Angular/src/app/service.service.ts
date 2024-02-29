import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { base_url } from './app.module';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  isLoggedIn: boolean = false;
  user: any;
  private isConnectedSubject: BehaviorSubject<{ isConnected: boolean, client: any }>;
  public isConnected$: Observable<{ isConnected: boolean, client: any }>;

  constructor(private http: HttpClient, public router: Router) {
    this.isConnectedSubject = new BehaviorSubject<{ isConnected: boolean, client: any }>({ isConnected: false, client: null });
    this.isConnected$ = this.isConnectedSubject.asObservable();
  }

  effectuerOperation(): void {
    const argentDuClient = this.isConnected.client.argent;
    console.log('Montant d\'argent du client:', argentDuClient);
  }

  set isConnected(data: { isConnected: boolean, client: any }) {
    this.isConnectedSubject.next(data);
  }

  get isConnected(): { isConnected: boolean, client: any } {
    return this.isConnectedSubject.value;
  }

  getRendezVous(): Observable<any[]> {
    return this.http.get<any[]>(base_url + '/rdvs');
  }

  getRendezVousByClient(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${base_url}/rdvs/${id}`);
  }

  getClientbyID(id: number): Observable<any> {
    return this.http.get<any>(`${base_url}/clients/${id}`);
  }

  getEmployerbyID(idEmployer: number): Observable<any> {
    return this.http.get<any>(`${base_url}/employers/${idEmployer}`);
  }

  getServEmployerbyID(idservEmployers: number): Observable<any> {
    return this.http.get<any>(`${base_url}/servEmployers/${idservEmployers}`);
  }

  getServicerbyID(idservice: number): Observable<any> {
    return this.http.get<any>(`${base_url}/services/${idservice}`);
  }

  getCoiffure(): Observable<any> {
    return this.http.get<any>(`${base_url}/servicesCoiffure`);
  }

  getManucure(): Observable<any> {
    return this.http.get<any>(`${base_url}/servicesManicure`);
  }

  getPeducure(): Observable<any> {
    return this.http.get<any>(`${base_url}/servicesPedicure`);
  }

  getEmployer(): Observable<any> {
    return this.http.get<any>(`${base_url}/Employers`);
  }

  getService(): Observable<any> {
    return this.http.get<any>(`${base_url}/services`);
  }

  getLastServEmployer(): Observable<any> {
    return this.http.get<any>(`${base_url}/servElatest`);
  }

  insertServEmployer(idServEmployer: number, idService: number, idEmployer: number): Observable<any> {
    const body = {
      idServEmployer: idServEmployer,
      idService: idService,
      idEmployer: idEmployer
    };

    return this.http.post<any>(`${base_url}/ServEmployers`, body)
      .pipe(
        catchError(this.handleError)
      );
  }

  insertRDV(id: number, idClient: number, idServEmployer: number, date: Date): Observable<any> {
    const body = {
      id: id,
      idClient: idClient,
      idServEmployer: idServEmployer,
      date: date
    };

    return this.http.post<any>(`${base_url}/rdvs`, body)
      .pipe(
        catchError(this.handleErro)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
    } else {
    }
    return throwError('');
  };

  private handleErro(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
    } else {
    }
    return throwError('');
  };

  connexion(username: string, mdp: string): Observable<any> {
    return this.http.get<any>(`${base_url}/clients/${username}/${mdp}`);
  }

  login(user: any) {
    this.isLoggedIn = true;
    this.user = user;
    this.isConnected = { isConnected: true, client: user.id };
  }

  logout() {
    this.isLoggedIn = false;
    this.isConnected = { isConnected: false, client: null };
  }

  updateArgent(clientId: number, argent: number): Observable<any> {
    const body = {
      argent: argent
    };
  
    return this.http.put<any>(`${base_url}/clients/${clientId}/update-argent`, body)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  

  inscription(id: number, nom: string, prenom: string, username: string, mdp: string, argent: number): Observable<any> {
    const clientData = { id, nom, prenom, username, mdp, argent };
    return this.http.post<any>(`${base_url}/clients`, clientData);
  }
}
