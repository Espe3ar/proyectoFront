import { Injectable } from '@angular/core';
import { Aviso } from 'src/Model/Aviso';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvisoService {
  avisos: Aviso[] = [];

  constructor(private api: ApiService) {}

  getAllAvisos(): Observable<Aviso[]> {
    return this.api.getAllAvisos();
  }

  getAvisoByTexto(texto: string): Observable<Aviso[]> {
    return this.api.findByTexto(texto);
  }

  createAviso(texto: string): Observable<Aviso> {
    return this.api.addAviso(texto);
  }

  deleteAviso(aviso: Aviso): Observable<Aviso> {
    return this.api.deleteAviso(aviso);
  }
  updateAviso(aviso: Aviso): Observable<Aviso> {
    return this.api.updateAviso(aviso);
  }
}