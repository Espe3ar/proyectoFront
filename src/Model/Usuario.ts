
import { Aviso } from "./Aviso";
import { Role } from "./Role";
export class Usuario{
    nombre?: string;
    apellido?:string;
    email?:string;
    contrasenia?:string;
    categoria?: string;
    genero?: string;
    avisos?: Aviso[];
    id?: string
    username?: string
    role?: Role 


    constructor(username: String, contrasenia:String,nombre: String, apellido: String, email: String, categoria:String, genero:String) {

    }
    addAviso(aviso: Aviso):void{
        this.avisos?.push(aviso)
    }
    
}
