import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rendezvous } from '../models/rendezvous.model';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {
  private apiUrl = 'http://localhost:2024/api/RendezVous'; 

  constructor(private http: HttpClient) { }

  getRendezVouss(): Observable<Rendezvous[]> {
    return this.http.get<Rendezvous[]>(this.apiUrl);
  }
}
