import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  mensaje = '';

  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      pass: ['', Validators.required],
    });
    // Verificar si hay un token en el sessionStorage
    const token = sessionStorage.getItem('token');
    if (token) {
      // Redirigir a la ruta '/reuniones'
      this.router.navigate(['/reuniones']);
    }
  }

  login() {
    if (this.loginForm.valid) {
      //Pasamos el nombre de usuario y contraseña y devuelve un token de tipo string
      this.service
        .login(this.loginForm.value.name, this.loginForm.value.pass)
        .subscribe({
          next: (token) => {
            sessionStorage.setItem('token', token); // clave valor
            this.router.navigate(['/reuniones']);
          },
          error: (error) => {
            (this.mensaje = 'Error al iniciar sesión. '), error;
          },
        });
    }
  }
}
