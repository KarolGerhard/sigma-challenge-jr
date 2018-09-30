import {RouterModule, Routes} from '@angular/router';
import {InicioComponent} from './paginas/inicio/inicio.component';
import {NaoEncontradoComponent} from './paginas/nao-encontrado/nao-encontrado.component';
import {ListaCandidatoComponent} from './paginas/lista-candidato/lista-candidato.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'listar/:cargo', component: ListaCandidatoComponent},
  {path: '**', component: NaoEncontradoComponent},

];

export const AppRoutingModule = RouterModule.forRoot(routes);
