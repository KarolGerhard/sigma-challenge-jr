import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConsultaService} from '../../../shared/services/consulta.service';

@Component({
  selector: 'app-detalha-candidato',
  templateUrl: './detalha-candidato.component.html',
  styleUrls: ['./detalha-candidato.component.css']
})
export class DetalhaCandidatoComponent implements OnInit, OnChanges {

  @Input() candidato: any;

  public dadosCandidato: any;

  constructor(private consultaService: ConsultaService) {
  }

  ngOnInit() {
  }

  ngOnChanges(): void {
    if (this.candidato) {
      const id = this.candidato.id;

      this.consultaService.buscaDetalhesCandidato(this.candidato.cargo.codigo, id)
        .subscribe(x => {
          this.dadosCandidato = x;
          console.log(x);
        });
    }
  }


}
