import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employer } from '../models/employer.model';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  private apiUrl = 'http://localhost:2024/api/Employers'; 

  constructor(private http: HttpClient) { }

  getEmployers(): Observable<Employer[]> {
    return this.http.get<Employer[]>(this.apiUrl);
  }
}
