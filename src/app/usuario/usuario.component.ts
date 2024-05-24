import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.obtenerDatosConsulta();
  }

  obtenerDatosConsulta(): void {
    this.usuarioService.getUsers().subscribe(
      datos => {
        // Aquí maneja los datos de la consulta recibidos
        console.log(datos);
      },
      error => {
        console.error('Error al obtener los datos de la consulta:', error);
      }
    );
  }
}
