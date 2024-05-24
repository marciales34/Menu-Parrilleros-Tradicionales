import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  success(message: string) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 1500
    });
  }

  error(message: string) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message
    });
  }

  warning(message: string) {
    Swal.fire({
      icon: 'warning',
      title: 'Warning',
      text: message
    });
  }

  info(message: string) {
    Swal.fire({
      icon: 'info',
      title: 'Info',
      text: message
    });
  }
}
