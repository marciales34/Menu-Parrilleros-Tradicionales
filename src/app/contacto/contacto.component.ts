import { Component } from '@angular/core';
import { PiePaginaComponent } from "../pie-pagina/pie-pagina.component";
import { EncabezadoComponent } from "../encabezado/encabezado.component";

@Component({
    selector: 'app-contacto',
    standalone: true,
    templateUrl: './contacto.component.html',
    styleUrl: './contacto.component.css',
    imports: [PiePaginaComponent, EncabezadoComponent]
})
export class ContactoComponent {

}
