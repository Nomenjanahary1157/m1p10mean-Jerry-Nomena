import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceEmployer } from '../models/serviceEmployer.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceEmployerService {
  private apiUrl = 'http://localhost:2024/api/ServiceEmployer'; 

  constructor(private http: HttpClient) { }

  getServiceEmployers(): Observable<ServiceEmployer[]> {
    return this.http.get<ServiceEmployer[]>(this.apiUrl);
  }
}
