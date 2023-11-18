import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reunion } from '../reunion';
import { ReunionService } from '../reunion.service';

@Component({
  selector: 'app-carga-reunion',
  templateUrl: './carga-reunion.component.html',
  styleUrls: ['./carga-reunion.component.css']
})
export class CargaReunionComponent implements OnInit {
  formularioReunion: FormGroup;
  mensaje = '';

  constructor(private formBuilder: FormBuilder, private service : ReunionService) { 
      this.formularioReunion = this.formBuilder.group({
      dia: ['', Validators.required],
      hora: ['', [Validators.required, Validators.min(8), Validators.max(22)]],
      duracion: ['', [Validators.required, Validators.min(1), Validators.max(14)]],
      detalle: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  // falta limitar el número de reuniones por día y que no se superpongan ! ! !
  onSubmitCargarReunion() {
    if (this.formularioReunion.valid) {
      //console.log('Formulario válido, datos:', this.formularioReunion.value);
      
      // Crea la reunión con los datos del formulario
      const reunion = new Reunion(this.formularioReunion.value);
      // servicio cargarReunion
      this.service.cargarReunion(reunion).subscribe(() => {
        this.mensaje = 'Guardado con éxito';
      });
    }
  }
}
