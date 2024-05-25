import { CommonModule, NgIf, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';

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
    @Inject(PLATFORM_ID) private platformId: Object, private alert: AlertService
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
      this.alert.confirmLogout('Confirmación', '¿Estás seguro de que deseas cerrar sesión?')
        .then((result) => {
          if (result.isConfirmed) {
            localStorage.removeItem('username');
            this.alert.success('¡Tu sesión ha finalizado exitosamente!');
            this.router.navigate(['']);
          }
        });
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

  redirigirContacto(){
    this.router.navigateByUrl('/contacto')
  }

  redirigirInicio(){
    this.router.navigate(['']); 
  }

  redirigirAlGestionReservas(){
    this.router.navigate(['/gestion-reserva'])
  }
}
