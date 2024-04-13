// inicio.component.ts

import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { PiePaginaComponent } from "../pie-pagina/pie-pagina.component";
import { EncabezadoComponent } from "../encabezado/encabezado.component";


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  images: string[] = ["gall1.jpg", "gall2.jpg", "gall3.jpg", "gall4.jpg", "gall5.jpg", "gall6.jpg"];
  zoomedIndex: number | null = null;

  zoomImage(index: number): void {
    this.zoomedIndex = index;
  }

  resetZoom(): void {
    this.zoomedIndex = null;
  }
}

@NgModule({
    declarations: [InicioComponent],
    imports: [CommonModule, PiePaginaComponent, EncabezadoComponent]
})
export class InicioModule { }


