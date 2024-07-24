import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-reserva-delete-modal',
  templateUrl: './reserva-delete-modal.component.html',
  styleUrls: ['./reserva-delete-modal.component.css']
})
export class ReservaDeleteModalComponent {
  isVisible: boolean = false;

  @Output() onConfirm: EventEmitter<void> = new EventEmitter<void>();
  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();

  show() {
    this.isVisible = true;
  }

  hide() {
    this.isVisible = false;
  }

  confirm() {
    this.onConfirm.emit();
    this.hide();
  }

  cancel() {
    this.onCancel.emit();
    this.hide();
  }
}
