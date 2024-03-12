import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Series } from '../model/series';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  obtenerUsuarios(): Observable<Series[]> {
    return this.http.get<Series[]>(`${this.apiUrl}/series`);
  }

  obtenerUsuario(serieId: number): Observable<Series> {
    return this.http.get<Series>(`${this.apiUrl}/series/${serieId}`);
  }

  agregarUsuario(usuario: Series): Observable<any> {
    return this.http.post(`${this.apiUrl}/series`, usuario);
  }

  actualizarUsuario(serieId: number, serie: Series): Observable<any> {
    return this.http.put(`${this.apiUrl}/series/${serieId}`, serie);
  }

  eliminarUsuario(serieId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/series/${serieId}`);
  }
}
