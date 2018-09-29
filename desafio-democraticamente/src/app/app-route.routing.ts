import {ListaPresidentesComponent} from './lista-presidentes/lista-presidentes.component';
import {RouterModule, Routes} from '@angular/router';
import {InicioComponent} from './inicio/inicio.component';
import {NaoEncontradoComponent} from './nao-encontrado/nao-encontrado.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'candidato', component: ListaPresidentesComponent },
  { path: '**', component: NaoEncontradoComponent},


];

export const AppRoutingModule = RouterModule.forRoot(routes);
