import { Usuario } from "./Usuario";

export class Aviso {
    id?: string;
    texto?: string;
    propietario?: Usuario;
  
    constructor(texto: string, propietario?: Usuario) {
      this.texto = texto;
      this.propietario = propietario;
    }
  }