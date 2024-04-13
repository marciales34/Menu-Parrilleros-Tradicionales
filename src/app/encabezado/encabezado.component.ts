import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [],
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.css'
})
export class EncabezadoComponent {

  constructor(private router: Router){}

  redirigirALogin(){
    this.router.navigateByUrl('/login'); 
  }

}
