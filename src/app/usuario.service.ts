import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:3000/consultar'; // URL de tu servidor Express para la consulta

  constructor(private http: HttpClient) { }

  // Método para obtener los datos de la consulta
  obtenerDatosConsulta(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
