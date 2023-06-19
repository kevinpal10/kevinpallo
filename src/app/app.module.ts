import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedesSocialesComponent } from './componentes/redes-sociales/redes-sociales.component';
import { AboutMeComponent } from './portafolio/about-me/about-me.component';
import { HabilidadesComponent } from './portafolio/habilidades/habilidades.component';
import { ProyectosComponent } from './portafolio/proyectos/proyectos.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { PortadaComponent } from './portafolio/portada/portada.component';
import { InicioComponent } from './vistas/inicio/inicio.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { ListadoProyectosComponent } from './vistas/listado-proyectos/listado-proyectos.component';
import { DibujosComponent } from './portafolio/dibujos/dibujos.component';


@NgModule({
  declarations: [
    AppComponent,
    RedesSocialesComponent,
    AboutMeComponent,
    HabilidadesComponent,
    ProyectosComponent,
    NavBarComponent,
    PortadaComponent,
    InicioComponent,
    ListadoComponent,
    ListadoProyectosComponent,
    DibujosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
