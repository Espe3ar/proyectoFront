import { Usuario } from "./Usuario";

export class Reserva {
    id?: string;                
    fechayHoraEntrada: Date;   
    fechayHoraSalida: Date;    
    canchaReservada: string;
    propietario?: Usuario; 
    constructor(canchaReservada: string, fechayHoraEntrada: Date,fechayHoraSalida: Date, propietario?: Usuario) {
        this.canchaReservada = canchaReservada;
        this.propietario = propietario;
        this.fechayHoraEntrada=fechayHoraEntrada;
        this.fechayHoraSalida=fechayHoraSalida;
    }      
}