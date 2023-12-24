import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Reunion } from '../reunion';
import { ReunionService } from '../reunion.service';

@Component({
  selector: 'app-listado-reuniones',
  templateUrl: './listado-reuniones.component.html',
  styleUrls: ['./listado-reuniones.component.css'],
})
export class ListadoReunionesComponent implements OnInit {
  mensaje = '';
  formulario: FormGroup;
  diaSeleccionado = 'Lunes';
  reuniones: Reunion[] = [];
  reunionesMostrar: Reunion[] = [];
  dias: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

  constructor(
    private formBuilder: FormBuilder,
    private reunionService: ReunionService
  ) {
    this.formulario = this.formBuilder.group({
      diaSeleccionado: ['Lunes'], // valor por defecto
    });
  }

  ngOnInit(): void {
    this.onSubmitMostrarReunionesPorDia();
  }

  onSubmitMostrarReunionesPorDia() {
    this.diaSeleccionado = this.formulario.get('diaSeleccionado')?.value;
    this.reunionService.listarReuniones().subscribe({
      next: (reuniones) => {
        this.reuniones = reuniones;
        this.reunionesMostrar = this.reuniones.filter(
          (reunion) => reunion.dia === this.diaSeleccionado
        );
      },
      error: (error) => {
        (this.mensaje = 'Error al mostrar las reuniones. '), error;
      },
    });
  }

  eliminarReunion(id: number) {
    this.reunionService
      .eliminarReunion(id)
      .subscribe(() => this.onSubmitMostrarReunionesPorDia());
  }

  // editar?
}
