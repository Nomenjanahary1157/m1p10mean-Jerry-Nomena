import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Remise } from '../models/remise.model';

@Injectable({
  providedIn: 'root'
})
export class RemiseService {
  private apiUrl = 'http://localhost:2024/api/Remises'; 

  constructor(private http: HttpClient) { }

  getRemises(): Observable<Remise[]> {
    return this.http.get<Remise[]>(this.apiUrl);
  }
}
