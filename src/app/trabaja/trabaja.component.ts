import { Component } from '@angular/core';
import { PiePaginaComponent } from "../pie-pagina/pie-pagina.component";
import { EncabezadoComponent } from "../encabezado/encabezado.component";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'
import { AlertService } from '../alert.service';

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
        private form: FormBuilder,
        private alert: AlertService
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
        // Verificar si los campos están vacíos
        const formValues = this.formulario.value;
    
        // Mostrar alerta de confirmación
        this.alert.confirmSave('Confirmación', '¿Quieres enviar tu hoja de vida?')
          .then((result) => {
            if (result.isConfirmed) {
              // Enviar la reserva al servidor
              this.http.post('http://localhost:3000/registroTrabajadores', formValues)
                .subscribe(
                  (response: any) => {
                    console.log('Respuesta del servidor:', response);
                    this.alert.success('Hoja de vida enviada Correctamente');
                    this.router.navigate(['']);
                  },
                  (error) => {
                    console.error('Error al enviar la hoja de vida:', error);
                    this.alert.error('Hubo un error al enviar la hoja de vida.');
                  }
                );
            }
          });
      } else {
        this.alert.error('Por favor completa todos los campos.');
      }
    }
    

}
