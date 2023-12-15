import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reunion } from '../reunion';
import { ReunionService } from '../reunion.service';

@Component({
  selector: 'app-agregar-reunion',
  templateUrl: './agregar-reunion.component.html',
  styleUrls: ['./agregar-reunion.component.css']
})
export class AgregarReunionComponent implements OnInit {
  formularioReunion!: FormGroup;
  mensaje = '';
  reuniones: Reunion[] = [];

  constructor(private formBuilder: FormBuilder, private reunionService : ReunionService) {   }

ngOnInit() {
    this.formularioReunion = this.formBuilder.group({
      dia: ['', Validators.required],
      hora: ['', [Validators.required, Validators.min(8), Validators.max(22)]],
      duracion: ['', [Validators.required, Validators.min(1), Validators.max(14)]],
      detalle: ['', [Validators.required, Validators.maxLength(100)]]
    });
    this.reunionService.listarReuniones().subscribe({
      next: (reuniones) => {
        this.reuniones = reuniones;
        console.log(this.reuniones.length);
      },
      error: (error) => {
        this.mensaje ='Error al contar las reuniones:', error;
        }
      });
  }

  // falta controlar que no creen reuniones duplicadas o que se superpongan ! ! !
  onSubmitAgregarReunion() {
    
    if (this.formularioReunion.valid && this.reuniones.length < 20) {
          
      const nuevaReunion = new Reunion(this.formularioReunion.value);

      const hayReunionDuplicada = this.reuniones.some(reunion => this.sonReunionesIdenticas(reunion, nuevaReunion));

      const hayReunionSuperpuesta = this.reuniones.some(reunion => this.estanSuperpuestas(reunion, nuevaReunion));
            
      if (!hayReunionDuplicada) {
        if (!hayReunionSuperpuesta){
          this.reunionService.agregarReunion(nuevaReunion).subscribe({
            next: () => {
                this.mensaje = 'Reunión guardada con éxito ';
                this.formularioReunion.reset();
                this.reuniones.length++;
                console.log(this.reuniones.length)
            },
            error: (error) => {
              this.mensaje = 'Error al agregar la reunión:', error;
            }
          });
        } else {
          this.mensaje = 'No se puede agregar la reunión ingresada. Se superpone con una reunión ya existente.';
        }
      } else {
          this.mensaje = 'No se puede agregar la reunión ingresada. Ya existe una idéntica.';
        }
  } else {
        this.mensaje = 'No se puede agregar una nueva reunión. 20 es el máximo de reuniones adminitidas por semana.';
      }
}
sonReunionesIdenticas(reunion1: Reunion, reunion2: Reunion) {
  return (
    reunion1.dia === reunion2.dia &&
    reunion1.hora === reunion2.hora &&
    reunion1.duracion === reunion2.duracion &&
    reunion1.detalle === reunion2.detalle
  );
}
estanSuperpuestas(reunion1: Reunion, reunion2: Reunion){
  return (
    reunion1.dia === reunion2.dia &&
    (reunion1.hora+reunion1.duracion) > reunion2.hora &&
    reunion1.hora < (reunion2.hora+reunion2.duracion)
  );
}

}
