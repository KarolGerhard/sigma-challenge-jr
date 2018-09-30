import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {

  @Output() aoSelecionar: EventEmitter<string> = new EventEmitter<string>();
  @Input() isMenu: boolean;
  public cargos = ['presidente', 'governador', 'senador', 'deputado federal', 'deputado estadual'];

  constructor() {
  }

  ngOnInit() {
  }

  public selecionar(cargo) {
    this.aoSelecionar.emit(cargo);
  }

}
