import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-perro',
  templateUrl: './registro-perro.component.html',
  styleUrls: ['./registro-perro.component.css']
})
export class RegistroPerroComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = fb.group({
      idPerro: [null, Validators.required],
      nombrePerro: ['', Validators.required],
      estadoPerro: ['', Validators.required],
      activo: [false],
      tamanoPerro: [''],
      colorPerro: [''],
      distintivo: ['']
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      // Aquí puedes enviar los datos del formulario al servidor o realizar otras acciones.
      console.log(this.formulario.value);
    }
  }
}
