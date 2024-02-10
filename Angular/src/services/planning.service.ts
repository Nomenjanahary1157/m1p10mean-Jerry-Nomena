import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planning } from '../models/planning.model';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {
  private apiUrl = 'http://localhost:2024/api/Plannings'; 

  constructor(private http: HttpClient) { }

  getPlannings(): Observable<Planning[]> {
    return this.http.get<Planning[]>(this.apiUrl);
  }
}
