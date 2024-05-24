import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  conectarBaseDatos(): void {
    this.http.post<any>(`${this.apiUrl}/conectar`, {}).subscribe(
      response => {
        console.log('Conexión exitosa a la base de datos:', response.message);
      },
      error => {
        console.error('Error al conectar con la base de datos:', error);
      }
    );
  }

  ejecutarConsulta(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/consultar`);
  }

 
}
