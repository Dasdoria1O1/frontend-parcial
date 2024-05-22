import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entity } from '../models/entity.model';

@Injectable({
  providedIn: 'root'
})
export class EntityService {
  private apiUrl = 'http://localhost:8080/entities';

  constructor(private http: HttpClient) { }

  getEntities(): Observable<Entity[]> {
    return this.http.get<Entity[]>(this.apiUrl);
  }

  getEntity(id: number): Observable<Entity> {
    return this.http.get<Entity>(`${this.apiUrl}/${id}`);
  }

  createEntity(entity: Entity): Observable<Entity> {
    return this.http.post<Entity>(this.apiUrl, entity);
  }

  updateEntity(id: number, entity: Entity): Observable<Entity> {
    return this.http.put<Entity>(`${this.apiUrl}/${id}`, entity);
  }

  deleteEntity(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
