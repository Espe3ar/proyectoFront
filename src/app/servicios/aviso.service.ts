import { Injectable } from '@angular/core';
import { Aviso } from 'src/Model/Aviso';
import { Usuario } from 'src/Model/Usuario';
import { ApiService } from './api.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvisoService {
  avisos: Aviso[]=[]
  

  constructor(private api: ApiService) {
    }

    getAllAvisos(): Observable<Aviso[]>{
    return this.api.getAllAvisos();
  }
  getAvisoByTexto(texto: string): Aviso | undefined{
    return this.api.findByTexto(texto);
  }
  createAviso(texto: string, usuario: Usuario): Observable<Aviso>{
    let newAviso: Aviso = new Aviso(texto,usuario);
    return this.api.createAviso(newAviso);
  }
  deleteAviso(aviso: Aviso): Observable<Aviso>{
    return this.api.deleteAviso(aviso);
  }

}
