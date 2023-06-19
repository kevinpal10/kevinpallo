import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './vistas/inicio/inicio.component';
import { ListadoProyectosComponent } from './vistas/listado-proyectos/listado-proyectos.component';
import { DibujosComponent } from './portafolio/dibujos/dibujos.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'listado/:nameProyecto', component: ListadoProyectosComponent},
  {path:'dibujos', component: DibujosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
