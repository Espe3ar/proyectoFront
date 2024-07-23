import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioInfoComponent } from './inicio-info/inicio-info.component';
import { ContactoComponent } from './inicio-info/contacto/contacto.component';
import { BienvenidaComponent } from './inicio-info/bienvenida/bienvenida.component';
import { AvisosComponent } from './avisos/avisos.component';
import { AvisoComponent } from './avisos/aviso/aviso.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ReservasComponent } from './reservas/reservas.component';
import { ReservaComponent } from './reservas/reserva/reserva.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import{ HttpClientModule} from '@angular/common/http';
import { CrearReservaComponent } from './reservas/crear-reserva/crear-reserva.component';
import { LoginComponent } from './login/login.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { AvisoDeleteModalComponent } from './avisos/aviso-delete-modal/aviso-delete-modal.component';
import { InfoUsuarioComponent } from './info-usuario/info-usuario.component';
import { AvisoEditModalComponent } from './avisos/aviso-edit-modal/aviso-edit-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioInfoComponent,
    ContactoComponent,
    BienvenidaComponent,
    AvisosComponent,
    AvisoComponent,
    ReservasComponent,
    ReservaComponent,
    NotFoundComponentComponent,
    CrearReservaComponent,
    LoginComponent,
    RegistroUsuarioComponent,
    AvisoDeleteModalComponent,
    InfoUsuarioComponent,
    AvisoEditModalComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
