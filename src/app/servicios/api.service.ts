import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aviso } from 'src/Model/Aviso';
import { ResponseLoginDTO } from '../dto/ResponseLoginDTO';
import { Usuario } from 'src/Model/Usuario';
import { Reserva } from 'src/Model/Reserva';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _url: string = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getToken(): string | null {
    return localStorage.getItem('token') || null;
  }
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getAuthHeader(): object {
    return { headers: { 'Authorization': 'Bearer ' + this.getToken() } };
  }

  login(username: string, password: string): Observable<ResponseLoginDTO> {
    return this.http.post<ResponseLoginDTO>(this._url + 'auth/login', { username, password });
  }

  getAllAvisos(): Observable<Aviso[]> {
    return this.http.get<Aviso[]>(this._url + 'aviso', this.getAuthHeader());
  }


  addAviso(texto: string): Observable<Aviso> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new HttpParams().set('textoaviso', texto);
    return this.http.post<Aviso>(this._url + 'aviso/create', body.toString(), { headers });
  }

  findByTexto(texto: string): Observable<Aviso[]> {
    return this.http.get<Aviso[]>(`${this._url}aviso/find`, {
      ...this.getAuthHeader(),
      params: { texto }
    });
  }

  createUsuario(newUsuario: Usuario): Observable<Usuario> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Usuario>(this._url + 'usuario/create', newUsuario, { headers });
  }

  getUserInfo(): Observable<Usuario> {
    return this.http.get<Usuario>(this._url + 'usuario', this.getAuthHeader());
  }

  deleteAviso(aviso: Aviso): Observable<any> {
    return this.http.delete(this._url+ 'aviso/delete/' + aviso.id, this.getAuthHeader());
  }
  updateAviso(aviso: Aviso): Observable<Aviso> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Aviso>(`${this._url}aviso/update/${aviso.id}`, aviso, { headers, ...this.getAuthHeader() });
  }
  getAllReservas(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(this._url + 'reserva', this.getAuthHeader());
  }

  deleteReserva(reserva: Reserva): Observable<any> {
    return this.http.delete(this._url+ 'reserva/delete/' + reserva.id, this.getAuthHeader());
  }

  addReserva(reserva: Reserva): Observable<Reserva> {
    return this.http.post<Reserva>(this._url + 'reserva/create', reserva, this.getAuthHeader());
  }


}
