import { Component, OnInit } from '@angular/core';
import{FormControl, FormGroup, Validators} from '@angular/forms'
import { Usuario } from 'src/Model/Usuario';
import { UsuarioService } from '../servicios/usuario.service';
import { Aviso } from 'src/Model/Aviso';
import { ApiService } from '../servicios/api.service';
import { Router } from '@angular/router';
import { LoginService } from '../servicios/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.loginService.isUserLogin().subscribe(status => {
      this.isAuthenticated = status;
    });
  }

  logout(): void {
    this.loginService.logout();
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

}

