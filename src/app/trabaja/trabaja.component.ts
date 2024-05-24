import { Component } from '@angular/core';
import { PiePaginaComponent } from "../pie-pagina/pie-pagina.component";
import { EncabezadoComponent } from "../encabezado/encabezado.component";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'

@Component({
    selector: 'app-trabaja',
    standalone: true,
    templateUrl: './trabaja.component.html',
    styleUrl: './trabaja.component.css',
    imports: [PiePaginaComponent, EncabezadoComponent, CommonModule, ReactiveFormsModule]
})
export class TrabajaComponent {

    constructor(
        private router: Router,
        private http: HttpClient,
        private form: FormBuilder
      ) {this.formulario = this.form.group({
        nombre: ['', Validators.required],
        apellidos: ['', Validators.required],
        email: ['', Validators.required],
        telefono: ['', Validators.required],
        hoja_vida: ['', Validators.required],
      });}
    
    formulario: FormGroup;

    onSubmit() {
        if (this.formulario.valid) {
          this.http
            .post('http://localhost:3000/registroTrabajadores', this.formulario.value)
            .subscribe(
              (response: any) => {
                console.log('Respuesta del servidor:', response);
                Swal.fire("Reserva Registrada Correctamente");
                // Ahora podemos usar la propiedad 'name' en la respuesta para obtener el nombre del usuario
                this.router.navigate(['']);
              },
              (error) => {
                console.error('Error al registrar la reserva:', error);
                alert("Por favor completa todos los campos.");
              }
            );     
        } 
      }

}
