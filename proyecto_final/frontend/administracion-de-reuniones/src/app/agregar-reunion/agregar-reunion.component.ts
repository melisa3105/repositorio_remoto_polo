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

  constructor(private formBuilder: FormBuilder, private service : ReunionService) {   }

  ngOnInit() {
    this.formularioReunion = this.formBuilder.group({
      dia: ['', Validators.required],
      hora: ['', [Validators.required, Validators.min(8), Validators.max(22)]],
      duracion: ['', [Validators.required, Validators.min(1), Validators.max(14)]],
      detalle: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  // falta limitar el número de reuniones por día y que no se superpongan ! ! !
  onSubmitAgregarReunion() {
    if (this.formularioReunion.valid) {
      //console.log('Formulario válido, datos:', this.formularioReunion.value);
      
      // Crea la reunión con los datos del formulario
      const reunion = new Reunion(this.formularioReunion.value);
      console.log(reunion);
      /*
      // servicio agregarReunion
      this.service.agregarReunion(reunion).subscribe(() => {
        this.mensaje = 'Guardado con éxito';
      });
      */
    }
  }
}
