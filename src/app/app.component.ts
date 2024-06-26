import { RouterOutlet } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConexionService } from './conexion.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'MenuRestauranteParillaMaestra';

  constructor(private conexionService: ConexionService) {}



  ngOnInit(): void {
    this.conexionService.conectarBaseDatos();

    this.conexionService.ejecutarConsulta().subscribe(
      (resultado: any) => {
        console.log('Resultado de la consulta:', resultado);
      },
      (error) => {
        console.error('Error al ejecutar la consulta:', error);
      }
    );
  }
}
