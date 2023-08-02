import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Usuario } from 'src/Model/Usuario';
import { ApiService } from './api.service';
import { Role } from 'src/Model/Role';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios: Usuario[]=[]
  

  constructor(private api:ApiService) { 
  }
  createUser(username: String, contrasenia:String,nombre: String, apellido: String, email: String, categoria:String, genero:String):Observable<Usuario>{
    let newUsuario: Usuario=new Usuario(username,contrasenia,nombre,apellido,email,categoria,genero)
    return this.api.createUsuario(newUsuario);
  }
  getUsuarios(): Usuario[]{
    return this.usuarios
  }
  getUsuarioByEmail(email: string): Usuario | undefined{
    return this.usuarios.find(usuario => usuario.email== email);
  }
  getUserInfo(): Observable<Usuario> { 
    return this.api.getUserInfo();
  }
}
