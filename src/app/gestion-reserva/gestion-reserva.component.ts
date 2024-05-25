import { Component, OnInit } from '@angular/core';
import { PiePaginaComponent } from '../pie-pagina/pie-pagina.component';
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-gestion-reserva',
  standalone: true,

  templateUrl: './gestion-reserva.component.html',
  styleUrl: './gestion-reserva.component.css',
  imports: [PiePaginaComponent, EncabezadoComponent, NgIf, NgFor,ReactiveFormsModule],
})
export class GestionReservaComponent implements OnInit {
  reservas: any[] = [];
  formulario: FormGroup;
  estadoEdicion: boolean = false;
  reservaSeleccionada: any;
  mostrarFormulario = false;
  

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private alert: AlertService) {
    this.formulario = this.formBuilder.group({
        num_personas: ['', Validators.required],
        fecha_reservacion: ['', Validators.required],
        hora_reservacion: ['', Validators.required]
      });
  }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.http.get(`http://localhost:3000/reservas/${userId}`).subscribe(
        (response: any) => {
          this.reservas = response;
        },
        (error) => {
          console.error('Error al obtener las reservas:', error);
        }
      );
    }
  }

  eliminarReserva(reserva: any) {
    const reservaId = reserva.id_reservaciones;
    this.alert.confirm('¿Estás seguro?', '¡No podrás revertir esto!')
      .then((result) => {
        if (result.isConfirmed) {
          this.http.delete(`http://localhost:3000/reservas/${reservaId}`).subscribe(
            () => {
              this.alert.success('Reserva eliminada correctamente');
              this.ngOnInit(); // Esto volverá a cargar las reservas después de eliminar una
            },
            (error) => {
              console.error('Error al eliminar la reserva:', error);
              this.alert.error('Error al eliminar la reserva');
            }
          );
        }
      });
  }

  editarReserva(reserva: any) {
    this.reservaSeleccionada = reserva;
    this.alert.confirmEdit('¿Quieres Editar esta reserva?', '¡Por favor Confirma!')
    this.formulario.patchValue({
      num_personas: reserva.num_personas,
      fecha_reservacion: reserva.fecha_reservacion,
      hora_reservacion: reserva.hora_reservacion
    });
    this.estadoEdicion = true;
  }

  guardarEdicion() {
    const reservaId = this.reservaSeleccionada.id_reservaciones;
    const nuevaReserva = this.formulario.value;
  
    this.alert.confirmSave('¿Quieres Guardar esta reserva?', '¡Por favor Confirma!')
      .then((result) => {
        if (result.isConfirmed) {
          this.http.put(`http://localhost:3000/reservas/${reservaId}`, nuevaReserva)
            .subscribe(
              (response: any) => {
                this.alert.success('Reserva actualizada correctamente');
                console.log('Reserva actualizada correctamente:', response);
                // Actualizar la lista de reservas
                this.ngOnInit();
                this.estadoEdicion = false;
              },
              (error) => {
                this.alert.error('Error al actualizar la reserva');
                console.error('Error al actualizar la reserva:', error);
              }
            );
        }
      });
  }

  cancelarEdicion() {
    this.estadoEdicion = false;
  }

  

}



