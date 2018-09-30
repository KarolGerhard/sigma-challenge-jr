import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {DetalhaCandidatoComponent} from './paginas/lista-candidato/detalha-candidato/detalha-candidato.component';
import {InicioComponent} from './paginas/inicio/inicio.component';
import {NaoEncontradoComponent} from './paginas/nao-encontrado/nao-encontrado.component';
import {AppRoutingModule} from './app-route.routing';
import {ListaCandidatoComponent} from './paginas/lista-candidato/lista-candidato.component';
import {SharedModule} from './shared/shared.module';
import {FormsModule} from '@angular/forms';
import { MostraDetalheCandidatoComponent } from './paginas/lista-candidato/mostra-detalhe-candidato/mostra-detalhe-candidato.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DetalhaCandidatoComponent,
    InicioComponent,
    NaoEncontradoComponent,
    ListaCandidatoComponent,
    MostraDetalheCandidatoComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
