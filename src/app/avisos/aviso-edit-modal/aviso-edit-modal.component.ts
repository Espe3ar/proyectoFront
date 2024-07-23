import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-aviso-edit-modal',
  templateUrl: './aviso-edit-modal.component.html',
  styleUrls: ['./aviso-edit-modal.component.css']
})
export class AvisoEditModalComponent {
  isVisible: boolean = false;

  @Output() onConfirm: EventEmitter<void> = new EventEmitter<void>();
  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();

  editAvisoForm = new FormGroup({
    textoaviso: new FormControl('', [Validators.required])
  });

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
