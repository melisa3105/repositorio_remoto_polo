import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;

  constructor (private formBuilder : FormBuilder) {
      this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required ],
      pass: ['', Validators.required]
    });  
  }

  ngOnInit(): void {
    
  }
  onSubmit() {
    if (this.loginForm.valid ) {
      // lógica de autenticación 
      console.log('Formulario válido, usuario:', this.loginForm.value.usuario);
    } 
  }

}
