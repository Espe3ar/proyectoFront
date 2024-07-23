import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/Model/Usuario';
import { UsuarioService } from '../servicios/usuario.service';


@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent{

usuarios: Usuario[]=[]
newUsuarioForm= new FormGroup({
  nombre: new FormControl("", [Validators.required, Validators.maxLength(20)]),
  apellido: new FormControl("", [Validators.required, Validators.maxLength(20)]),
  contrasenia: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
  telefono: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
  email: new FormControl("", [Validators.required, Validators.email]),
  categoria: new FormControl("", [Validators.required]),
  genero: new FormControl("", [Validators.required]),
  username: new FormControl("", [Validators.required, Validators.maxLength(20)]),
})

constructor(private usuarioService:UsuarioService){}

onSubmit() : void{
  let nombre=this.newUsuarioForm.value.nombre!
  let apellido=this.newUsuarioForm.value.apellido!
  let contrasenia= this.newUsuarioForm.value.contrasenia!
  let email= this.newUsuarioForm.value.email!
  let categoria= this.newUsuarioForm.value.categoria!
  let genero= this.newUsuarioForm.value.genero!
  let username=this.newUsuarioForm.value.username!
  let telefono= this.newUsuarioForm.value.telefono!
  //let usuario: Usuario= new Usuario(username,contrasenia,nombre,apellido,email,categoria,genero);
  this.usuarioService.createUser(username,contrasenia,nombre,apellido,email,categoria,genero,telefono).subscribe((newUsuario)=>{
    console.log(newUsuario);
    this.usuarios.push(newUsuario)
  })
  this.newUsuarioForm.reset();
}

get nombre(): FormControl{return this.newUsuarioForm.controls['nombre']}
get apellido(): FormControl{return this.newUsuarioForm.controls['apellido']}
get email(): FormControl{return this.newUsuarioForm.controls['email']}
get contrasenia(): FormControl{return this.newUsuarioForm.controls['contrasenia']}
get categoria(): FormControl{return this.newUsuarioForm.controls['categoria']}
get genero(): FormControl{return this.newUsuarioForm.controls['genero']}
get username():FormControl{return this.newUsuarioForm.controls['username']}
get telefono():FormControl{return this.newUsuarioForm.controls['telefono']}

}
