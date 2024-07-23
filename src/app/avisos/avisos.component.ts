import { Component, OnInit, ViewChild } from '@angular/core';
import { Aviso } from 'src/Model/Aviso';
import { Usuario } from 'src/Model/Usuario';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AvisoService } from '../servicios/aviso.service';
import { UsuarioService } from '../servicios/usuario.service';
import { AvisoDeleteModalComponent } from './aviso-delete-modal/aviso-delete-modal.component';
import { AvisoEditModalComponent } from './aviso-edit-modal/aviso-edit-modal.component';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent implements OnInit {
  @ViewChild(AvisoDeleteModalComponent) avisoDeleteModal!: AvisoDeleteModalComponent;
  @ViewChild(AvisoEditModalComponent) avisoEditModal!: AvisoEditModalComponent;

  avisos: Aviso[] = [];
  usuario!: Usuario;

  avisoToDelete: Aviso | null = null;
  avisoToEdit: Aviso | null = null;

  newAvisoForm = new FormGroup({
    textoaviso: new FormControl('', [Validators.required])
  });

  constructor(private avisoService: AvisoService, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.loadUsuario();
    this.loadAvisos();
  }

  loadUsuario(): void {
    this.usuarioService.getUserInfo().subscribe({
      next: (data: Usuario) => {
        this.usuario = data;
        console.log('Usuario recibido:', this.usuario);
      },
      error: (error) => {
        console.error('Error al obtener la información del usuario:', error);
      }
    });
  }

  loadAvisos(): void {
    this.avisoService.getAllAvisos().subscribe({
      next: (data: Aviso[]) => {
        this.avisos = data;
        console.log('Avisos recibidos:', this.avisos);
      },
      error: (error) => {
        console.error('Error al obtener los avisos:', error);
      }
    });
  }

  onSubmit(): void {
    const textoAviso = this.newAvisoForm.value.textoaviso;

    if (typeof textoAviso === 'string' && textoAviso.trim() !== '') {
      this.avisoService.createAviso(textoAviso).subscribe({
        next: (newAviso) => {
          console.log('Aviso creado:', newAviso);
          this.avisos.push(newAviso);
        },
        error: (error) => {
          console.error('Error al crear el aviso:', error);
        }
      });
    } 
    this.newAvisoForm.reset();
  }

  openDeleteAvisoModal(aviso: Aviso) {
    this.avisoToDelete = aviso;
    this.avisoDeleteModal.show();
  }

  deleteAviso(aviso: Aviso): void {
    this.avisoService.deleteAviso(aviso).subscribe(() => {
      this.avisos = this.avisos.filter((b) => b.id !== aviso.id);
    });
  }

  handleDelete(): void {
    if (this.avisoToDelete) {
      this.deleteAviso(this.avisoToDelete);
      this.avisoToDelete = null;
    }
  }

  handleCancel() {
    this.avisoToDelete = null;
  }

 
  openEditAvisoModal(aviso: Aviso) {
    this.avisoToEdit = aviso;
    this.avisoEditModal.editAvisoForm.patchValue({
      textoaviso: aviso.texto
    });
    this.avisoEditModal.show();
  }

  handleEdit(): void {
    if (this.avisoToEdit) {
      const textoAviso = this.avisoEditModal.editAvisoForm.value.textoaviso;

      if (typeof textoAviso === 'string' && textoAviso.trim() !== '') {
        this.avisoService.updateAviso({ ...this.avisoToEdit, texto: textoAviso }).subscribe({
          next: (updatedAviso) => {
            console.log('Aviso actualizado:', updatedAviso);
            const index = this.avisos.findIndex((a) => a.id === updatedAviso.id);
            if (index !== -1) {
              this.avisos[index] = updatedAviso;
            }
          },
          error: (error) => {
            console.error('Error al actualizar el aviso:', error);
          }
        });
      } else {
        console.error('El texto del aviso no es válido.');
      }

      this.avisoToEdit = null;
    }
  }

  handleEditModalClose(): void {
    this.avisoToEdit = null;
  }

  get textoaviso(): FormControl {
    return this.newAvisoForm.get('textoaviso') as FormControl;
  }
}