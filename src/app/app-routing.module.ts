import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioInfoComponent } from './inicio-info/inicio-info.component';
import { AvisosComponent } from './avisos/avisos.component';
import { ReservasComponent } from './reservas/reservas.component';
import { NotFoundError } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { LoginComponent } from './login/login.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';

const routes: Routes = [
{path:'', component: InicioInfoComponent},
{path:'info', component: InicioInfoComponent},
{path:'info/reservas', component:ReservasComponent},
{path:'avisos', component: AvisosComponent},
{path:'reservas', component: ReservasComponent},
{path:'login',component: LoginComponent},
{path:'register', component: RegistroUsuarioComponent},
{path: '**', component: NotFoundComponentComponent}
];

@NgModule({
  imports: [

    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
