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
  constructor(private http: HttpClient, public router:Router) { }

  getRendezVous(): Observable<any[]> {
    return this.http.get<any[]>(base_url+'/rdvs');
  }

  getClientbyID(id: number): Observable<any> {
    return this.http.get<any>(`${base_url}/clients/${id}`);
  }

  getEmployerbyID(idEmployer: number): Observable<any> {
    return this.http.get<any>(`${base_url}/clients/${idEmployer}`);
  }

}
