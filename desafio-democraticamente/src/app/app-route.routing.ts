import {RouterModule, Routes} from '@angular/router';
import {InicioComponent} from './paginas/inicio/inicio.component';
import {NaoEncontradoComponent} from './paginas/nao-encontrado/nao-encontrado.component';
import {ListaCandidatoComponent} from './paginas/lista-candidato/lista-candidato.component';
import {MostraDetalheCandidatoComponent} from './paginas/lista-candidato/mostra-detalhe-candidato/mostra-detalhe-candidato.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'listar/:cargo', component: ListaCandidatoComponent},
  {path: 'detalhar/:cargo/:id', component: MostraDetalheCandidatoComponent},
  {path: '**', component: NaoEncontradoComponent},

];

export const AppRoutingModule = RouterModule.forRoot(routes);
