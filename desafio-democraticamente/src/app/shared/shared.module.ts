import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CargosComponent} from './componentes/cargos/cargos.component';
import { NavComponent } from './componentes/nav/nav.component';
import { FiltroCandidatoPipe } from './pipe/filtro-candidato.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CargosComponent, NavComponent, FiltroCandidatoPipe],
  exports: [CargosComponent, NavComponent, FiltroCandidatoPipe]
})
export class SharedModule {
}
