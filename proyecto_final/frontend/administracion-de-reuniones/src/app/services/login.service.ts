import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../usuario';
import { Observable } from 'rxjs';

const url = 'http://localhost:4444/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  //Recibe nombre de usuario y contraseña, hace un post y devuelve un observable de tipo string que el token
  login(name: string, pass : string) : Observable<string> { // Observable<string> es el token
    
    const user = new Usuario(name,pass);
    return this.http.post<string>(url,user);   // Observable<string> es el token 

  }
}
