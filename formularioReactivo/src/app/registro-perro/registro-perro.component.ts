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
      idPerro: ['', Validators.compose( [ Validators.required,Validators.minLength(6),Validators.maxLength(6) ] ) ],
      nombrePerro: ['', Validators.required],
      estadoPerro: ['', Validators.required],
      tamanoPerro: ['',Validators.required],
      colorPerro: ['',Validators.required],
      longitudPelaje: ['',Validators.required],
      distintivo: [''],
      activo: [true]
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      // Aquí puedes enviar los datos del formulario al servidor o realizar otras acciones.
      console.log(this.formulario.value);
    }
  }

  registrarPerro(){
    const datosPerro = this.formulario.value;
    //enviar datos al servidor
    console.log(datosPerro);
  }
  getErrorMessage() {
    if (this.formulario.controls['idPerro'].hasError('required')) {
      return 'Debes ingresar un id Perro';
    }
      return 'Id Perro inválido';
    //return this.formulario.controls['idPerro'].hasError('minLength(6)') ? 'Id Perro inválido' : '';
  }
}
