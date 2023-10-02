import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formReactive01';

  formulario : FormGroup;
  constructor(private fctrl: FormBuilder){
    this.formulario = fctrl.group({
      codigo: ['',Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(6),
      ])
    ],
      nombre: ['',Validators.required]

    })
  }
onSubmit(){
  console.log("codigo " + this.formulario.controls['codigo'].value);
  console.log("nombre " + this.formulario.controls['nombre'].value);
  console.log(JSON.stringify(this.formulario.value));
  //this.formulario.controls['codigo'].setValue(this.formulario.controls['nombre'].value); //le seteo el valor de nombre a codigo
}

}
