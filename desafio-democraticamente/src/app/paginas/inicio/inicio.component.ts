import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MenuService} from '../../shared/services/menu.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public titulo = 'Democraticamente';
  public cargo = 'Presida';

  constructor(private router: Router, private menu: MenuService) {
  }

  ngOnInit() {
  }

  aoSelecionarMetodo($event) {
    this.router.navigateByUrl(`/listar/${$event}`).then(() => this.menu.exibirMenu());
  }
}
