import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioDenunciasComponent } from './formulario-denuncias/formulario-denuncias.component';


const routes: Routes = [
  {path: 'formulario' , component:FormularioDenunciasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
