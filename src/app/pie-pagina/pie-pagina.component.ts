import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pie-pagina',
  standalone: true,
  imports: [],
  templateUrl: './pie-pagina.component.html',
  styleUrl: './pie-pagina.component.css'
})
export class PiePaginaComponent {

  constructor( private router: Router){

  }

  redirigirReservas(event: Event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    this.router.navigate(['/reserva']); // Reemplaza '/ruta-a-reservas' con la ruta real a tu página de reservas
  }
  

  redirigirInicio(){
    this.router.navigate(['']); 
  }

}
