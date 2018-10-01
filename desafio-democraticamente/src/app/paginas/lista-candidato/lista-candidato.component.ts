import {ChangeDetectorRef, Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ConsultaService} from '../../shared/services/consulta.service';
import {EstadoService} from '../../shared/services/estado.service';
import {DetalhaCandidatoComponent} from './detalha-candidato/detalha-candidato.component';

@Component({
  selector: 'app-lista-candidato',
  templateUrl: './lista-candidato.component.html',
  styleUrls: ['./lista-candidato.component.css']
})
export class ListaCandidatoComponent implements OnInit, OnChanges {

  @Input() cargo: string = 'Nenhum cargo selecionado';

  public dados: any;
  public candidatoSelecionado: any;
  public exibeModal = false;

  public estados: Array<any>;
  public estadoSelecionado = 'MT';
  public filtro: string;

  constructor(private consultaService: ConsultaService, private route: ActivatedRoute, private estadosService: EstadoService,
              private router: Router) {

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

  detalhaCandidato(evento: any) {
    this.candidatoSelecionado = evento.data;
    this.exibeModal = true;
    sessionStorage.setItem(this.candidatoSelecionado.id, JSON.stringify(this.candidatoSelecionado));
  }

  irParaPaginaCandidato(candidato: any) {
    this.router.navigateByUrl(`detalhar/${this.estadoSelecionado}/${this.cargo}/${candidato.id}`);
  }

}
