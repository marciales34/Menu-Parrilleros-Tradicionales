// inicio.component.ts

import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { PiePaginaComponent } from "../pie-pagina/pie-pagina.component";
import { EncabezadoComponent } from "../encabezado/encabezado.component";
import { GaleriaComponent } from "../galeria/galeria.component";
import { Router } from '@angular/router';
import { SliderBebidasComponent } from "../slider-bebidas/slider-bebidas.component";
import { SegundosliderComponent } from "../segundoslider/segundoslider.component";



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(private router: Router){

  }
  images: string[] = ["gall1.jpg", "gall2.jpg", "gall3.jpg", "gall4.jpg", "gall5.jpg", "gall6.jpg"];
  zoomedIndex: number | null = null;

  text1 = "Saborea la comida en Parrilla Maestra"
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

  redirigirInicio(){
    this.router.navigate(['']); 
  }


  
}



@NgModule({
    declarations: [InicioComponent],
    imports: [CommonModule, PiePaginaComponent, EncabezadoComponent, GaleriaComponent, SliderBebidasComponent, SegundosliderComponent]
})
export class InicioModule { }


