import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reunion } from './reunion';


@Injectable({
  providedIn: 'root'
})
export class ReunionService {

  apiReuniones = 'http://localhost:4444/reuniones';

  constructor(private http: HttpClient) { }

  mostrarReunionesPorDia(dia: string): Observable<Reunion[]> {
    return this.http.get<Reunion[]>(`${this.apiReuniones}/${dia}`);
  }
  cargarReunion(reunion: Reunion): Observable<Reunion> {
    return this.http.post<Reunion>(this.apiReuniones, reunion)
  }
  eliminarReunion(id: number) {
    return this.http.delete<Reunion>(`${this.apiReuniones}/${id}`);
  }
}
