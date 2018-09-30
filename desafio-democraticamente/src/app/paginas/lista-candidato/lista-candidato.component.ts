import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {ConsultaService} from '../../shared/services/consulta.service';

@Component({
  selector: 'app-lista-candidato',
  templateUrl: './lista-candidato.component.html',
  styleUrls: ['./lista-candidato.component.css']
})
export class ListaCandidatoComponent implements OnInit, OnChanges {

  @Input() cargo: string = 'Nenhum cargo selecionado';

  public dados: any;
  public candidatoSelecionado: any;

  private URL_PRESIDENTE = 'http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/BR/2022802018/1/candidatos';
  private URL_GOVERNADOR = 'http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/MT/2022802018/3/candidatos';
  private URL_SENADOR = 'http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/MT/2022802018/5/candidatos';
  private URL_DEPUTADO_ESTADUAL = 'http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/MT/2022802018/7/candidatos';
  private URL_DEPUTADO_FEDERAL = 'http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/MT/2022802018/6/candidatos';

  constructor(private consultaService: ConsultaService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.cargo = params.get('cargo');
      this.buscarCandidatos();
    });
  }

  ngOnChanges() {
    this.buscarCandidatos();
  }

  buscarCandidatos() {
    switch (this.cargo) {
      case 'presidente':
        this.consultar(this.URL_PRESIDENTE);
        break;
      case 'senador':
        this.consultar(this.URL_SENADOR);
        break;
      case 'deputado federal':
        this.consultar(this.URL_DEPUTADO_FEDERAL);
        break;
      case 'deputado estadual':
        this.consultar(this.URL_DEPUTADO_ESTADUAL);
        break;
      case 'governador':
        this.consultar(this.URL_GOVERNADOR);
        break;
      default:
        console.log('Não encontrado');
        break;
    }
  }


  consultar(url: string) {
    this.consultaService.get(url)
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
