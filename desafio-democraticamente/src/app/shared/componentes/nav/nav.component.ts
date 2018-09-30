import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isOpen = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  aoSelecionarMetodo($event) {
    this.isOpen = !this.isOpen;
    this.router.navigateByUrl(`/listar/${$event}`);
  }
}
