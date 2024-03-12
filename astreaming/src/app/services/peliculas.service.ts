import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Peliculas } from '../model/peliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  obtenerUsuarios(): Observable<Peliculas[]> {
    return this.http.get<Peliculas[]>(`${this.apiUrl}/series`);
  }

  obtenerUsuario(peliculaId: number): Observable<Peliculas> {
    return this.http.get<Peliculas>(`${this.apiUrl}/peliculas/${peliculaId}`);
  }

  agregarUsuario(usuario: Peliculas): Observable<any> {
    return this.http.post(`${this.apiUrl}/peliculas`, usuario);
  }

  actualizarUsuario(peliculaId: number, pelicula: Peliculas): Observable<any> {
    return this.http.put(`${this.apiUrl}/peliculas/${peliculaId}`, pelicula);
  }

  eliminarUsuario(peliculaId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/peliculas/${peliculaId}`);
  }
}
