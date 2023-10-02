import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',  //ruta, sino podría escribir el html entre comillas invertidas
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
    nombre='Melisa';
    habilitado: boolean = false;

    greetUser(){
      return `Hola usuario ${this.nombre}`
    }

    cambiar(){
      this.habilitado = !this.habilitado;
    }
}
