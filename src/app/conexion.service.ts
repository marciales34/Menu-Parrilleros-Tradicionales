import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private apiUrl='http://localhost:3000';

  constructor(private http: HttpClient) { }
  conectarBaseDatos(): void {
    this.http.post<any>(`${this.apiUrl}/conectar`, {}).subscribe(
      response => {
        console.log('Conexión exitosa a la base de datos:', response.text); // Manejar el mensaje de texto
      },
      error => {
        console.error('Error al conectar con la base de datos:', error);
      }
    );
  }

    ejecutarConsulta(): Observable<string>{
      return this.http.get<string>(`http://localhost:3000/consultar`)


    }
  
  }

