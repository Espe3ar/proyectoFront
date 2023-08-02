import{Usuario} from"./Usuario";
export class Aviso{
    texto?: string;
    usuario: Usuario;
    id?: number
    constructor(texto: string, usuario: Usuario){
    this.texto=texto;
    this.usuario=usuario;
    }
}