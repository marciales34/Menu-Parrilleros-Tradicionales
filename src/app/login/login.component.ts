import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Asegúrate de importar HttpClient si no lo has hecho ya
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import Swal from 'sweetalert2';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements AfterViewInit {
  formularioLogin: FormGroup;
  formulario: FormGroup;

  constructor(
    private elementRef: ElementRef,
    private router: Router,
    private http: HttpClient,
    private form: FormBuilder,
    private alert: AlertService
  ) {
    this.formulario = this.form.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], // Añadido el validador de email
      password: ['', Validators.required],
      telefono: ['', Validators.required],
    });
    this.formularioLogin = this.form.group({
      email: ['', [Validators.required, Validators.email]], // Añadido el validador de email
      password: ['', Validators.required],
    });
  }

  ngAfterViewInit(): void {
    const signUpButton = this.elementRef.nativeElement.querySelector('#signUp');
    const signInButton = this.elementRef.nativeElement.querySelector('#signIn');
    const container = this.elementRef.nativeElement.querySelector('#container');

    signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });
  }

  redirigirInicio(){
    this.router.navigate(['']); 
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.http.post('http://localhost:3000/registro', this.formulario.value).subscribe(
        (response: any) => {
          console.log('Respuesta del servidor:', response);
          this.alert.info("Registrado Correctamente");
          localStorage.setItem('username', response.name);
          localStorage.setItem('userId', response.id);
          this.router.navigate(['']);
        },
        (error) => {
          console.error('Error al registrar usuario:', error);
          this.alert.error("Error al registrar usuario. Por favor, inténtelo de nuevo.");
        }
      );
    } else {
      this.alert.error("Por favor, completa todos los campos.");
    }
  }

  login() {
    if (this.formularioLogin.valid) {
      this.http.post('http://localhost:3000/login', this.formularioLogin.value).subscribe(
        (response: any) => {
          console.log('Respuesta del servidor:', response);
          this.alert.success('Sesión iniciada correctamente');
          localStorage.setItem('username', response.usuario);
          localStorage.setItem('userId', response.id);
          this.router.navigate(['']);
        },
        (error) => {
          console.error('Credenciales Incorrectas');
          this.alert.error("Credenciales incorrectas. Por favor, revisa e inténtalo de nuevo.");
        }
      );
    } else {
      this.alert.error("Por favor, completa todos los campos.");
    }
  }
}

