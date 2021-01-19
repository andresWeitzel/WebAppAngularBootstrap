import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { CardComponent } from './card/card.component';
import { MapComponent } from './map/map.component';
import { FormularioDenunciasComponent } from './formulario-denuncias/formulario-denuncias.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InicioComponent } from './inicio/inicio.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { FormularioDenunciasRespuestaComponent } from './formulario-denuncias-respuesta/formulario-denuncias-respuesta.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarrouselComponent,
    CardComponent,
    MapComponent,
    FormularioDenunciasComponent,
    PageNotFoundComponent,
    InicioComponent,
    NovedadesComponent,
    FormularioDenunciasRespuestaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
