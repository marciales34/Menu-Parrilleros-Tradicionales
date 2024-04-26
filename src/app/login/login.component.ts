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

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements AfterViewInit {
  constructor(
    private elementRef: ElementRef,
    private router: Router,
    private http: HttpClient,
    private form: FormBuilder
  ) {
    this.formulario = this.form.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      telefono: ['', Validators.required],
    });
    this.formularioLogin =this.form.group({email:['', Validators.required], password:['', Validators.required]})
  }

  formularioLogin: FormGroup;
  formulario: FormGroup;

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

  onSubmit() {
    if (this.formulario.valid) {
      this.http
        .post('http://localhost:3000/registro', this.formulario.value)
        .subscribe(
          (response: any) => {
            console.log('Respuesta del servidor:', response);
            alert("Registrado Correctamente");
            // Ahora podemos usar la propiedad 'name' en la respuesta para obtener el nombre del usuario
            localStorage.setItem('username', response.name);
            this.router.navigate(['']);
          },
          (error) => {
            console.error('Error al registrar usuario:', error);
            alert("Por favor completa todos los campos.");
          }
        );     
    } 
  }
  

   login(){

    if(this.formularioLogin.valid){
      this.http
      .post('http://localhost:3000/login', this.formularioLogin.value)
      .subscribe(
        (response: any) => {
          console.log('Respuesta del servidor:', response);
          alert("Sesión iniciada correctamente")
          localStorage.setItem('username', response.usuario); 
          this.router.navigate(['']);
           // Guardar el correo electrónico en el almacenamiento local

        },
        (error) =>{
          console.error('Credenciales Incorrectas')
          alert("Credenciales Incorrectas por favor REVISAR!")
        }
      );    
    }
  }
}

