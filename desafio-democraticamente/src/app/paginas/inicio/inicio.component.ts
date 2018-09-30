import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public titulo = 'Democraticamente';
  public cargo = 'Presida';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  aoSelecionarMetodo($event) {
    this.router.navigateByUrl(`/listar/${$event}`);
  }
}
