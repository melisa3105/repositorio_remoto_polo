import { Injectable } from '@angular/core';

//datos se define antes del @Inyectable que está decorando la clase DevolverDatosService
const datos = ['Alberto', 'Mariana', 'Juan', 'Liliana', 'Sergio'];

@Injectable({
  providedIn: 'root'
})

export class DevolverDatosService {

  constructor() { }

  fDevolverDatos(){
    return datos;
  }

}
