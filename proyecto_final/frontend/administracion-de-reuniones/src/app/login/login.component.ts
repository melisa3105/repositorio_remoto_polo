import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup;

  constructor (private fb : FormBuilder, private service: LoginService) { }  
  
  ngOnInit() {
    this.loginForm = this.fb.group({
    usuario: ['', Validators.required ],
    pass: ['', Validators.required]
  });
  }
  login() {
    if (this.loginForm.valid ) {
      console.log('Formulario válido, usuario:', this.loginForm.value.usuario);
      // lógica de autenticación con el servicio LoginService
      this.service.login(this.loginForm.value.usuario, this.loginForm.value.pass).subscribe(token => {
      //falta código en el suscribe (error)
      //guardar token en el localstorage
      sessionStorage.setItem('token',token);
    });  
    } 
  }

}
