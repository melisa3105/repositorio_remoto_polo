import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';

const url = 'http://localhost:4444/login'; // login o auth ?

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(usuario: string, pass : string) : Observable<string> { // Observable<string> es el token
    const user = new Usuario(usuario,pass);
    return this.http.post<string>(url,user);
  }
}
