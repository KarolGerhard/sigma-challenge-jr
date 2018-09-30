import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public eventMenu: EventEmitter<boolean> = new EventEmitter<boolean>(true);

  constructor() {
  }

  exibirMenu() {
    this.eventMenu.emit(true);
  }

  esconderMenu() {
    this.eventMenu.emit(false);
  }
}
