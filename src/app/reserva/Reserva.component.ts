import { Component, ElementRef } from '@angular/core';
import { EncabezadoComponent } from "../encabezado/encabezado.component";
import { CommonModule } from '@angular/common';
import { PiePaginaComponent } from '../pie-pagina/pie-pagina.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertService } from '../alert.service';
@Component({
    selector:'app-Reserva',
    standalone: true,
 templateUrl:'./Reserva.component.html',
 styleUrls:['./Reserva.component.css'],
 imports: [CommonModule, PiePaginaComponent, EncabezadoComponent, ReactiveFormsModule]
})
export class Reservacomponent{

    constructor(
        private elementRef: ElementRef,
        private router: Router,
        private http: HttpClient,
        private form: FormBuilder,
        private alert: AlertService
      ) {this.formulario = this.form.group({
        nombre_usuario: ['', Validators.required],
        num_personas: ['', Validators.required],
        fecha_reservacion: ['', Validators.required],
        hora_reservacion: ['', Validators.required],
      });}

    formulario: FormGroup;

    
    onSubmit() {
      if (this.formulario.valid) {
        this.alert.confirmSave('¿Quieres registrar esta reserva?', '¡Por favor Confirma!')
          .then((result) => {
            if (result.isConfirmed) {
              this.http.post('http://localhost:3000/registrarReserva', this.formulario.value)
                .subscribe(
                  (response: any) => {
                    console.log('Respuesta del servidor:', response);
                    this.alert.success('Reserva Registrada Correctamente');
                    localStorage.setItem('username', response.nombre_usuario);
                    this.router.navigate(['']);
                  },
                  (error) => {
                    console.error('Error al registrar la reserva:', error);
                    this.alert.error('Hubo un error al registrar la reserva.');
                  }
                );
            }
          });
      } else {
        this.alert.error('Por favor completa todos los campos.');
      }
    }
    
    
}