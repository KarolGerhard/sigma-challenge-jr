import {ListaPresidentesComponent} from './lista-presidentes/lista-presidentes.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {DetalhaCandidatoComponent} from './detalha-candidato/detalha-candidato.component';
import {InicioComponent} from './inicio/inicio.component';
import {NaoEncontradoComponent} from './nao-encontrado/nao-encontrado.component';
import {AppRoutingModule} from './app-route.routing';


@NgModule({
  declarations: [
    AppComponent,
    ListaPresidentesComponent,
    DetalhaCandidatoComponent,
    InicioComponent,
    NaoEncontradoComponent

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
