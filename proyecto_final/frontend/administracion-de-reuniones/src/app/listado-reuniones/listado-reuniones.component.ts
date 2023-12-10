import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Reunion } from '../reunion';
import { ReunionService } from '../reunion.service';

@Component({
  selector: 'app-listado-reuniones',
  templateUrl: './listado-reuniones.component.html',
  styleUrls: ['./listado-reuniones.component.css']
})
export class ListadoReunionesComponent implements OnInit {
  mensaje = '';
  formulario: FormGroup;
  diaSeleccionado = 'Lunes';
  //reuniones: Reunion[] = [];
  reunionesMostrar : Reunion[] = [];
  reuniones: Reunion[] = [
    {
      id: 1,
      dia: 'Lunes',
      hora: 10,
      duracion: 2,
      detalle: 'Reunión de equipo',
    },
    {
      id: 2,
      dia: 'Martes',
      hora: 14,
      duracion: 1,
      detalle: 'Entrevista de trabajo',
    },
    {
      id: 3,
      dia: 'Miércoles',
      hora: 16,
      duracion: 3,
      detalle: 'Presentación de proyecto',
    },
    {
      id: 4,
      dia: 'Miércoles',
      hora: 8,
      duracion: 3,
      detalle: 'Presentación de power point',
    },
  ];


  // Días posibles para el selector
  dias: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

  constructor(private formBuilder: FormBuilder, private reunionService: ReunionService) {
    this.formulario = this.formBuilder.group({
      diaSeleccionado: ['Lunes'] // Valor por defecto
    });
  }

  ngOnInit(): void {
    this.onSubmitMostrarReunionesPorDia();
  }

  onSubmitMostrarReunionesPorDia() {
    this.diaSeleccionado = this.formulario.get('diaSeleccionado')?.value;
    this.reunionesMostrar = this.reuniones.filter(reunion => reunion.dia === this.diaSeleccionado);
/*
    this.reunionService.mostrarReunionesPorDia(this.diaSeleccionado).subscribe((reuniones) => {
      this.reuniones = reuniones;
      // Filtrado de reuniones por el día seleccionado
     this.reunionesMostrar = this.reuniones.filter(reunion => reunion.dia === this.diaSeleccionado);
     },
     (error) => {
     console.error('Error al cargar las reuniones:', error);
      }
   );
   */
  }

  
  eliminarReunion(id: number) {
    // Acá el código para eliminar la reunión con el id proporcionado
    // Se puede usar un servicio para realizar la llamada de eliminación.
    this.reunionService.eliminarReunion(id).subscribe(() => 
    this.mensaje = 'Reunión eliminada');
  }

  // editar?
}
