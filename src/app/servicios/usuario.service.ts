import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/Model/Usuario';
import { ApiService } from './api.service';
import { Aviso } from 'src/Model/Aviso';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios: Usuario[] = [];

  constructor(private api: ApiService) { }

  createUser(username: string, contrasenia: string, nombre: string, apellido: string, email: string, categoria: string, genero: string, telefono: string): Observable<Usuario> {
    let newUsuario: Usuario = new Usuario(username, contrasenia, nombre, apellido, email, categoria, genero,telefono);
    return this.api.createUsuario(newUsuario);
  }

  getUsuarios(): Usuario[] {
    return this.usuarios;
  }

  getUsuarioByEmail(email: string): Usuario | undefined {
    return this.usuarios.find(usuario => usuario.email == email);
  }

  getUserInfo(): Observable<Usuario> {
    return this.api.getUserInfo();
  }
  

}
