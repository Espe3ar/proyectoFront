import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { Aviso } from 'src/Model/Aviso';
import { ResponseLoginDTO } from '../dto/ResponseLoginDTO';
import { Usuario } from 'src/Model/Usuario';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  _url: string ='http://localhost:8080/api/'

  constructor(private http:HttpClient) { }

  getToken() : string | null {
    return localStorage.getItem('token') || null
  }
  

  getAuthHeader(): object {
    return {headers: { 'Authorization': 'Bearer ' + this.getToken()} } 
  }
  login(username: string, password: string): Observable<ResponseLoginDTO> {
    return this.http.post<ResponseLoginDTO>(this._url + 'auth/login', {username: username, password: password})
  }

getAllAvisos():Observable<Aviso[]>{
  return this.http.get<Aviso[]>(this._url+'aviso',this.getAuthHeader())
}
createAviso(newAviso:Aviso):Observable<Aviso>{
return this.http.post<Aviso>(this._url+'aviso/create', newAviso,this.getAuthHeader())
}

findByTexto(texto: string): Aviso | undefined{
  throw new Error('Method not implemented');
}
//Si no pongo que es de tipo usuario no me deja
createUsuario(newUsuario: Usuario):Observable<Usuario>{
  return this.http.post<Usuario>(this._url+'usuario/create', newUsuario,this.getAuthHeader())
}

getUserInfo(): Observable<Usuario> {
  return this.http.get<Usuario>(this._url + 'usuario', this.getAuthHeader())
}
deleteAviso(aviso: Aviso): Observable<any> {
  return this.http.delete(this._url + 'usuario/delete' + aviso.id, this.getAuthHeader())
}



}
