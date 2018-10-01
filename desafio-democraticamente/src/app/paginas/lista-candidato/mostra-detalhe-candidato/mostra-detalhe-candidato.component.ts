import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ConsultaService} from '../../../shared/services/consulta.service';

@Component({
  selector: 'app-mostra-detalhe-candidato',
  templateUrl: './mostra-detalhe-candidato.component.html',
  styleUrls: ['./mostra-detalhe-candidato.component.css']
})
export class MostraDetalheCandidatoComponent implements OnInit {
  public dadosCandidato: any;

  public cargo: string;
  public estado: string;
  public id: string;


  constructor(private route: ActivatedRoute, private consultaService: ConsultaService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.estado = params.get('estado');
      this.cargo = params.get('cargo');
      this.id = params.get('id');
      this.buscarCandidato();
    });
  }

  buscarCandidato() {
    this.consultaService.buscaDetalhesCandidato(this.cargo, this.id, this.estado)
      .subscribe(x => {
        this.dadosCandidato = x;
      });
  }


}
