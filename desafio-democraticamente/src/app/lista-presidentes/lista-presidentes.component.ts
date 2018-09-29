import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-lista-presidentes',
  templateUrl: './lista-presidentes.component.html',
  styleUrls: ['./lista-presidentes.component.css']
})
export class ListaPresidentesComponent implements OnInit {

  private url: string;
  public dados: any;
  public candidatoSelecionado: any;

  constructor(private http: HttpClient) {
    this.url = 'http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/BR/2022802018/1/candidatos';
  }

  ngOnInit() {
    this.http.get(this.url)
      .subscribe(x => {
          this.dados = x;
          console.log(x);
        },
        erro => console.error(erro));
  }

  detalhaCandidato(candidato: any) {
    this.candidatoSelecionado = candidato;
  }
}
