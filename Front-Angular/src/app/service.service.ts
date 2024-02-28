import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { base_url} from './app.module';
import { ActivatedRoute,Router } from '@angular/router';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  isLoggedIn: boolean = false;
  user: any;

  constructor(private http: HttpClient, public router:Router) { }

  getRendezVous(): Observable<any[]> {
    return this.http.get<any[]>(base_url+'/rdvs');
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

  connexion(username: string, mdp: string) :Observable<any> {
    return this.http.get<any>(`${base_url}/clients/${username}/${mdp}`);
  }

  login(user: any) {
    this.isLoggedIn = true;
    this.user = user;
  }

  logout() {
    this.isLoggedIn = false;
    this.user = null;
  }

  inscription(nom: string, prenom: string, username: string, mdp: string): Observable<any> {
    const clientData = { nom, prenom, username, mdp };
    return this.http.post<any>(`${base_url}/clients`, clientData);
  }

}
