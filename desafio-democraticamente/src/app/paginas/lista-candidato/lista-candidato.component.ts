import {ChangeDetectorRef, Component, Input, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ConsultaService} from '../../shared/services/consulta.service';
import {EstadoService} from '../../shared/services/estado.service';

@Component({
  selector: 'app-lista-candidato',
  templateUrl: './lista-candidato.component.html',
  styleUrls: ['./lista-candidato.component.css']
})
export class ListaCandidatoComponent implements OnInit, OnChanges {

  @Input() cargo: string = 'Nenhum cargo selecionado';

  public dados: any;
  public candidatoSelecionado: any;

  public estados: Array<any>;
  public estadoSelecionado = 'MT';
  public filtro: string;

  constructor(private cd: ChangeDetectorRef, private consultaService: ConsultaService, private route: ActivatedRoute, private estadosService: EstadoService) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.cargo = params.get('cargo');
      this.buscarCandidatos();
    });
    this.estadosService.obterEstados()
      .subscribe((x: any[]) => this.estados = x);
  }

  ngOnChanges() {
    this.buscarCandidatos();
  }

  buscarCandidatos() {
    this.consultaService.buscarCandidatos(this.cargo, this.estadoSelecionado)
      .subscribe(x => {
          this.dados = x;
        },
        erro => console.error(erro));
  }

  detalhaCandidato(candidato: any) {
    this.candidatoSelecionado = candidato;
    sessionStorage.setItem(candidato.id, JSON.stringify(candidato));
    this.cd.detectChanges();
  }

}
