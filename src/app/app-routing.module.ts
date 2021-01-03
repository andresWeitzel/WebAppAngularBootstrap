import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioDenunciasComponent } from './formulario-denuncias/formulario-denuncias.component';
import { InicioComponent } from './inicio/inicio.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'inicio' , component:InicioComponent},
  {path: 'formulario-denuncias' , component:FormularioDenunciasComponent},
  {path: 'novedades' , component:NovedadesComponent},
  {path: '', component:InicioComponent, pathMatch: 'full'},
  {path: '**' , component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
