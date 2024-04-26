import { Component } from '@angular/core';
import { PiePaginaComponent } from "../pie-pagina/pie-pagina.component";
import { EncabezadoComponent } from "../encabezado/encabezado.component";

@Component({
    selector: 'app-trabaja',
    standalone: true,
    templateUrl: './trabaja.component.html',
    styleUrl: './trabaja.component.css',
    imports: [PiePaginaComponent, EncabezadoComponent]
})
export class TrabajaComponent {

}
