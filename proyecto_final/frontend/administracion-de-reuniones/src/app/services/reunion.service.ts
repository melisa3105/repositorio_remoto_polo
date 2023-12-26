import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reunion } from '../reunion';


@Injectable({
  providedIn: 'root'
})
export class ReunionService {

  url = 'http://localhost:4444/reuniones/';

  constructor(private http: HttpClient) { }
  listarReuniones(): Observable<Reunion[]> {
    
    return this.http.get<Reunion[]>(`${this.url}/listar`);
  }

  agregarReunion(reunion: Reunion): Observable<void> {
    
    return this.http.post<void>(`${this.url}/agregar`, reunion)
  }

  eliminarReunion(id: number): Observable<void>  {
    
    return this.http.delete<void>(`${this.url}/eliminar/${id}`);
  }
  
  // listarReuniones(): Observable<Reunion[]> {
  //   const token = sessionStorage.getItem('token');
  //   const headers = new HttpHeaders().set('Authorization',token!);
  //   return this.http.get<Reunion[]>(`${this.url}/listar`, { headers : headers});
  // }

  // agregarReunion(reunion: Reunion): Observable<void> {
  //   const token = sessionStorage.getItem('token');
  //   const headers = new HttpHeaders().set('Authorization',token!);
  //   return this.http.post<void>(`${this.url}/agregar`, reunion, { headers : headers})
  // }

  // eliminarReunion(id: number): Observable<void>  {
  //   const token = sessionStorage.getItem('token');
  //   const headers = new HttpHeaders().set('Authorization',token!);
  //   return this.http.delete<void>(`${this.url}/eliminar/${id}`, { headers : headers});
  // }
}
