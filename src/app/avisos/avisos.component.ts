import { Component, OnInit } from '@angular/core';
import { Aviso } from 'src/Model/Aviso';
import { Usuario } from 'src/Model/Usuario';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AvisoService } from '../servicios/aviso.service';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent implements OnInit {
  avisos: Aviso[] = [];
  usuario!: Usuario; // Definir usuario como opcional

  newAvisoForm = new FormGroup({
    textoaviso: new FormControl('', [Validators.required])
  });

  constructor(private avisoService: AvisoService, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getUserInfo().subscribe(
      (data: Usuario) => {
        this.usuario = data;
      },
      (error) => {
        console.error('Error al obtener la información del usuario:', error);
      }
    );
  }
  onSubmit(): void {
   
    let aviso= this.newAvisoForm.value.textoaviso!
    this.usuarioService.createAviso(this.usuario,aviso).subscribe((newAviso)=>{
      console.log(newAviso);
      this.avisos.push(newAviso)
    })
    this.newAvisoForm.reset();
  }

  deleteAviso(aviso: Aviso): void {
    this.avisoService.deleteAviso(aviso).subscribe(
      () => this.avisos = this.avisos.filter(p => p.id !== aviso.id)
    );
  }

  get textoaviso(): FormControl {
    return this.newAvisoForm.get('textoaviso') as FormControl;
  }
}