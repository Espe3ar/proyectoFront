import { Component, ViewChild } from '@angular/core';
import { ReservaDeleteModalComponent } from './reserva-delete-modal/reserva-delete-modal.component';
import { Reserva } from 'src/Model/Reserva';
import { Usuario } from 'src/Model/Usuario';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReservaService } from '../servicios/reserva.service';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent {
  @ViewChild(ReservaDeleteModalComponent) reservaDeleteModal!: ReservaDeleteModalComponent;

  reservas: Reserva[] = [];
  usuario!: Usuario;

  reservaToDelete: Reserva | null = null;
  

  newReservaForm = new FormGroup({
    fechayHoraEntrada: new FormControl('', [Validators.required]),
    fechayHoraSalida: new FormControl('', [Validators.required]),
    canchaReservada: new FormControl('', [Validators.required])
  });

  constructor(private reservaService: ReservaService, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.loadUsuario();
    this.loadReservas();
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

  loadReservas(): void {
    this.reservaService.getAllReservas().subscribe({
      next: (data: Reserva[]) => {
        this.reservas = data;
        console.log('Reservas recibidas:', this.reservas);
      },
      error: (error) => {
        console.error('Error al obtener los avisos:', error);
      }
    });
  }

  onSubmit(): void {
    const { canchaReservada, fechayHoraEntrada, fechayHoraSalida } = this.newReservaForm.value;

    if (typeof canchaReservada === 'string' && canchaReservada.trim() !== ''
        && fechayHoraEntrada && fechayHoraSalida) {
      
      const fechaEntrada = new Date(fechayHoraEntrada);
      const fechaSalida = new Date(fechayHoraSalida);

      const isFechaEntradaValida = !isNaN(fechaEntrada.getTime());
      const isFechaSalidaValida = !isNaN(fechaSalida.getTime());

      if (isFechaEntradaValida && isFechaSalidaValida) {
        
        this.reservaService.createReserva(canchaReservada, fechaEntrada, fechaSalida).subscribe({
          next: (newReserva: Reserva) => {
            console.log('Reserva creada:', newReserva);
            this.reservas.push(newReserva);
          },
          error: (error) => {
            console.error('Error al crear la reserva:', error);
          }
        });
      } else {
        console.error('Fechas inválidas:', { fechaEntrada, fechaSalida });
      }
    } else {
      console.error('Datos de reserva inválidos:', {
        canchaReservada,
        fechayHoraEntrada,
        fechayHoraSalida
      });
    }

    this.newReservaForm.reset();
  }

  openDeleteReservaModal(reserva: Reserva) {
    this.reservaToDelete = reserva;
    this.reservaDeleteModal.show();
  }

  deleteReserva(reserva: Reserva): void {
    this.reservaService.deleteReserva(reserva).subscribe(() => {
      this.reservas = this.reservas.filter((b) => b.id !== reserva.id);
    });
  }

  handleDelete(): void {
    if (this.reservaToDelete) {
      this.deleteReserva(this.reservaToDelete);
      this.reservaToDelete = null;
    }
  }

  handleCancel() {
    this.reservaToDelete = null;
  }

  get canchaReservada(): FormControl {
    return this.newReservaForm.get('canchaReservada') as FormControl;
  }

  get fechayHoraEntrada(): FormControl {
    return this.newReservaForm.get('fechayHoraEntrada') as FormControl;
  }

  get fechayHoraSalida(): FormControl {
    return this.newReservaForm.get('fechayHoraSalida') as FormControl;
  }
}
