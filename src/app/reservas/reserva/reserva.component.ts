import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Reserva } from 'src/Model/Reserva';
import { Usuario } from 'src/Model/Usuario';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {
  @Input() reserva!: Reserva;
  @Input() usuario!: Usuario;
  @Output() delete = new EventEmitter<Reserva>();
  
  constructor() {}

  ngOnInit(): void {
    console.log('Reserva:', this.reserva);
    console.log('Usuario:', this.usuario);
  }

  deleteReserva(): void {
    this.delete.emit(this.reserva);
  }

  onDelete() {
    this.delete.emit();
  }
}
