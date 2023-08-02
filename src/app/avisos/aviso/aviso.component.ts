import { Component, Input } from '@angular/core';
import { Usuario } from 'src/Model/Usuario';

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.css']
})
export class AvisoComponent {
  @Input() aviso: any;
  

}
