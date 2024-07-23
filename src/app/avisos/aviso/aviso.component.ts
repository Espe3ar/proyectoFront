import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/Model/Usuario';
import { Aviso } from 'src/Model/Aviso';

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.css']
})
export class AvisoComponent implements OnInit {
  @Input() aviso!: Aviso;
  @Input() usuario!: Usuario;
  @Output() delete = new EventEmitter<Aviso>();
  @Output() edit = new EventEmitter<Aviso>();
  constructor() {}

  ngOnInit(): void {
    console.log('Aviso:', this.aviso);
    console.log('Usuario:', this.usuario);
  }

  deleteAviso(): void {
    this.delete.emit(this.aviso);
  }

  editAviso(): void {
    this.edit.emit(this.aviso);
  }
}