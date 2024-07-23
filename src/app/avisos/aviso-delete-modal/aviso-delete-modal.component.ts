import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-aviso-delete-modal',
  templateUrl: './aviso-delete-modal.component.html',
  styleUrls: ['./aviso-delete-modal.component.css']
})
export class AvisoDeleteModalComponent {
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
