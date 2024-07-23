import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/Model/Usuario';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.css']
})
export class InfoUsuarioComponent implements OnInit {
  usuario!: Usuario; 

  constructor(private usuarioService: UsuarioService){}

  ngOnInit(): void {
    this.loadUsuario();
  }

  loadUsuario(): void {
    this.usuarioService.getUserInfo().subscribe({
      next: (data: Usuario) => {
        this.usuario = data;
        console.log('Usuario recibido en info:', this.usuario);
      },
      error: (error) => {
        console.error('Error al obtener la información del usuario:', error);
      }
    });
  }

}