import { Component, OnInit } from '@angular/core';
import { Aviso } from 'src/Model/Aviso';
import { Usuario } from 'src/Model/Usuario';
import{FormControl, FormGroup, Validators} from '@angular/forms'
import { AvisoService } from '../servicios/aviso.service';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent implements OnInit {
avisos: Aviso[]=[];
usuario!:Usuario
//usuario!:Usuario | undefined
newAvisoForm=new FormGroup({
  textoaviso: new FormControl("", [Validators.required])
})

search: string='';

constructor(private avisoService: AvisoService, private usuarioService: UsuarioService){
  
}
ngOnInit(): void {
    this.avisoService.getAllAvisos().subscribe((data) =>{
      console.log(data);
      this.avisos= data
    })

    this.usuarioService.getUserInfo().subscribe((data:Usuario)=>{
      this.usuario= data;
    }
    )
  
}
filterAvisos(){
  console.log(this.search);
}
onSubmit():void{
  let textoaviso=this.newAvisoForm.value.textoaviso!
  this.avisoService.createAviso(textoaviso, this.usuario).subscribe((newAviso)=>{
    console.log(newAviso);
    this.avisos.push(newAviso)
  })
  this.newAvisoForm.reset()
}
deleteAviso(aviso: Aviso): void {
  this.avisoService.deleteAviso(aviso).subscribe( () => this.avisos = this.avisos.filter((p) => { return (p.id != aviso.id)}))
}
get textoaviso(): FormControl{return this.newAvisoForm.controls['textoaviso']}


}
