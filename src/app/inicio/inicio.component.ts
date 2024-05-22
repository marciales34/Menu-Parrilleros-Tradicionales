// inicio.component.ts

import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { PiePaginaComponent } from "../pie-pagina/pie-pagina.component";
import { EncabezadoComponent } from "../encabezado/encabezado.component";
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(private router: Router,){

  }
  images: string[] = ["gall1.jpg", "gall2.jpg", "gall3.jpg", "gall4.jpg", "gall5.jpg", "gall6.jpg"];
  zoomedIndex: number | null = null;

  text1 = "Prueba2 "
  zoomImage(index: number): void {
    this.zoomedIndex = index;
  }

  resetZoom(): void {
    this.zoomedIndex = null;
  }

  redirigirReservas(){
    this.router.navigateByUrl('/reserva'); 
  }

  redirigirPlato1(){
    this.router.navigateByUrl('/plato1')
  }

  
}



@NgModule({
    declarations: [InicioComponent],
    imports: [CommonModule, PiePaginaComponent, EncabezadoComponent]
})
export class InicioModule { }


