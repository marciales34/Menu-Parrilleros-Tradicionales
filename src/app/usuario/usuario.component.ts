import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit{

  constructor(private usuarioService: UsuarioService){}

  obtenerDatosConsulta(): void {
    this.usuarioService.obtenerDatosConsulta().subscribe(
      datos => {
        // Aquí maneja los datos de la consulta recibidos
        console.log(datos);
      },
      error => {
        console.error('Error al obtener los datos de la consulta:', error);
      }
    );
  }

  ngOnInit(): void {
    this.obtenerDatosConsulta();
  }

}
