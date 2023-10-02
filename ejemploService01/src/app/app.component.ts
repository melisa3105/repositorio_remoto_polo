import { Component } from '@angular/core';
import { DevolverDatosService } from './devolver-datos.service'; //esto lo agregué a mano...

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemploService01';
  constructor(private service: DevolverDatosService){
  }
  getValor(){
    return this.service.fDevolverDatos();
  }
}
