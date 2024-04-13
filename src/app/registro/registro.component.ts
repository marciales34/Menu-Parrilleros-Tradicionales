import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  constructor(private http: HttpClient, private router: Router) {}
  

  onSubmit(form: any) {
    // Enviar los datos del formulario al servidor
    this.http.post('/registro', form.value)
      .subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          this.router.navigate(['/inicio']);
          // Aquí puedes agregar lógica adicional después de que se haya registrado el usuario correctamente
        },
        (error) => {
          console.error('Error al registrar usuario:', error);
          // Aquí puedes manejar errores si el registro falla
        }
      );
  }

}
