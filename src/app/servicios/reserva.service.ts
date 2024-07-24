import { Injectable } from '@angular/core';
import { Reserva } from 'src/Model/Reserva';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  reservas: Reserva[] = [];

  constructor(private api: ApiService) {}

  getAllReservas(): Observable<Reserva[]> {
    return this.api.getAllReservas();
  }


  createReserva(canchaReservada: string, fechayHoraEntrada: Date,fechayHoraSalida: Date): Observable<Reserva> {
    let newReserva: Reserva =new Reserva(canchaReservada,fechayHoraEntrada,fechayHoraSalida)
    return this.api.addReserva(newReserva);
  }

  deleteReserva(reserva: Reserva): Observable<Reserva> {
    return this.api.deleteReserva(reserva);
  }
}
