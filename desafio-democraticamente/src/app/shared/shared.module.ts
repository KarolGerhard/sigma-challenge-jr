import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CargosComponent} from './componentes/cargos/cargos.component';
import {NavComponent} from './componentes/nav/nav.component';
import {FiltroCandidatoPipe} from './pipe/filtro-candidato.pipe';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule, ProgressSpinnerModule} from 'primeng/primeng';
import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    ButtonModule,
    CommonModule,
    DialogModule,
    ProgressSpinnerModule,
    TableModule
  ],
  declarations: [
    CargosComponent,
    NavComponent,
    FiltroCandidatoPipe
  ],
  exports: [
    ButtonModule,
    CargosComponent,
    DialogModule,
    NavComponent,
    FiltroCandidatoPipe,
    ProgressSpinnerModule,
    TableModule
  ]
})
export class SharedModule {
}
