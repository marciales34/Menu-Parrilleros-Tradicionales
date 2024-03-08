// inicio.component.ts

import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

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
  imports: [CommonModule], // Asegúrate de incluir CommonModule aquí
})
export class InicioModule { }


