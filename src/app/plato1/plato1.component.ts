import { Component } from '@angular/core';
import { EncabezadoComponent } from "../encabezado/encabezado.component";
import { PiePaginaComponent } from "../pie-pagina/pie-pagina.component";
import { Router } from '@angular/router';
import { GaleriaComponent } from "../galeria/galeria.component";


@Component({
    selector: 'app-plato1',
    standalone: true,
    templateUrl: './plato1.component.html',
    styleUrl: './plato1.component.css',
    imports: [EncabezadoComponent, PiePaginaComponent, GaleriaComponent]
})
export class Plato1Component {

    constructor( private router : Router){

    }

    redirigirReservas(){
        this.router.navigateByUrl('/reserva'); 
      }
}
