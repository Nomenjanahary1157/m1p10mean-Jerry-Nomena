import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeDepense } from '../models/typeDepense.model';

@Injectable({
  providedIn: 'root'
})
export class TypeDepenseService {
  private apiUrl = 'http://localhost:2024/api/TypeDepense'; 

  constructor(private http: HttpClient) { }

  getTypeDepenses(): Observable<TypeDepense[]> {
    return this.http.get<TypeDepense[]>(this.apiUrl);
  }
}
