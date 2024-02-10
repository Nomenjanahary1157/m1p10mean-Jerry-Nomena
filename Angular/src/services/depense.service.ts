import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Depense } from '../models/depense.model';

@Injectable({
  providedIn: 'root'
})
export class DepenseService {
  private apiUrl = 'http://localhost:2024/api/Depenses'; 

  constructor(private http: HttpClient) { }

  getDepenses(): Observable<Depense[]> {
    return this.http.get<Depense[]>(this.apiUrl);
  }
}
