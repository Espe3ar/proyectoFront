import { Component, OnInit } from '@angular/core';
import{FormControl, FormGroup, Validators} from '@angular/forms'
import { Usuario } from 'src/Model/Usuario';
import { UsuarioService } from '../servicios/usuario.service';
import { Aviso } from 'src/Model/Aviso';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

}

