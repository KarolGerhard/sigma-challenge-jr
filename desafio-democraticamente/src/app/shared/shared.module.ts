import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CargosComponent} from './componentes/cargos/cargos.component';
import { NavComponent } from './componentes/nav/nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CargosComponent, NavComponent],
  exports: [CargosComponent, NavComponent]
})
export class SharedModule {
}
