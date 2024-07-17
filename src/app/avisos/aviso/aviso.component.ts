import { Component, Input } from '@angular/core';
import { Usuario } from 'src/Model/Usuario';
import { AvisoService } from 'src/app/servicios/aviso.service';
import { Aviso } from 'src/Model/Aviso';

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.css']
})
export class AvisoComponent {
  @Input() aviso: any;
  @Input() usuario!: Usuario;

  constructor() {
    
  }
  ngOnInit(): void {
  }

}
