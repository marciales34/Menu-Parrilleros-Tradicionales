import { CommonModule, NgIf, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.css'
})

export class EncabezadoComponent { 

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  loggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('username');
    }
    return false;
  }

  getUsername(): string {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('username') || '';
    }
    return '';
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('username');
      alert("Su sesión ha FINALIZADO.");
      this.router.navigate(['']);
    }
  }

  redirigirALogin(){
    this.router.navigateByUrl('/login'); 
  }

  redirigirReservas(){
    this.router.navigateByUrl('/reserva'); 
  }

  redirigirTrabaja(){
    this.router.navigateByUrl('/trabaja')
  }

  redirigirInicio(){
    this.router.navigate(['']); 
  }
}
