import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';

const url = 'http://localhost:4444/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(name: string, pass : string) : Observable<string> { // Observable<string> es el token
    const user = new Usuario(name,pass);
    console.log('2-Entró a login() de service. User: ',user);
    //POST
    return this.http.post<string>(url,user);   // Observable<string> es el token 

    //falta agregar "Interceptores" que automáticamente agregan el token para mandar al servidor
  }


}
