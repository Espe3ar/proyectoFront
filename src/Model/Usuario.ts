
import { Aviso } from "./Aviso";
export class Usuario{
    nombre?: string
    apellido?:string
    email?:string
    contrasenia?:string
    categoria?: string
    genero?: string
    avisos?: Aviso[]
    id?: string
    username?: string


    constructor(username: string, contrasenia:string,nombre: string, apellido: string, email: string, categoria:string, genero:string) {
        this.username=username;
        this.contrasenia=contrasenia;
        this.nombre=nombre;
        this.apellido=apellido;
        this.email=email;
        this.categoria=categoria;
        this.genero=genero;

        this.avisos = [];

    }
    addAviso(aviso: Aviso): void {
        if (!this.avisos) {
            this.avisos = []; 
        }
        this.avisos.push(aviso);
    }
    
}
