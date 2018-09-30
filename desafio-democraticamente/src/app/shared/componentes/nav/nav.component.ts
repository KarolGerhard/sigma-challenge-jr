import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {MenuService} from '../../services/menu.service';
import {animate, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    trigger('ngIfAnimation', [
      transition('void => *', [
        query('*', style({ opacity: 0, background: 'white' }), {optional: true}),
        query('*', stagger('80ms', [
          animate('0.3s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1.0}),
          ]))]), {optional: true}),
      ]),
      transition('* => void', [
        query('*', style({ opacity: 1, background: 'white' }), {optional: true}),
        query('*', stagger('80ms', [
          animate('0.3s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1.0}),
          ]))]), {optional: true}),
      ])
    ])]
})
export class NavComponent implements OnInit {

  isOpen = false;
  showMenu = false;

  constructor(private router: Router, private menu: MenuService, private location: Location) {
    this.menu.eventMenu.subscribe(x => this.showMenu = x);
  }

  ngOnInit() {
    const url = this.location.path();
    this.showMenu = url && url !== '/';
  }

  aoSelecionarMetodo($event) {
    this.isOpen = !this.isOpen;
    this.router.navigateByUrl(`/listar/${$event}`)
      .then(() => this.menu.exibirMenu());
  }

  irParaPaginaInicial() {
    this.router.navigateByUrl('/')
      .then(() => {
        this.isOpen = false;
        this.menu.esconderMenu();
      });
  }
}
