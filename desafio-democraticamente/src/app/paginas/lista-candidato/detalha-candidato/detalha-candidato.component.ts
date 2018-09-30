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
  private URL_PRESIDENTE = 'http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/2018/BR/2022802018/candidato/';
  private URL_OUTROS = 'http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/2018/MT/2022802018/candidato/';


  constructor(private consultaService: ConsultaService) {
  }

  ngOnInit() {
  }

  ngOnChanges(): void {
    if (this.candidato) {
      const id = this.candidato.id;
      console.log(this.candidato);
      const url = this.candidato.cargo.codigo === 1 ? this.URL_PRESIDENTE : this.URL_OUTROS;

      this.consultaService.get(url + id)
        .subscribe(x => {
          this.dadosCandidato = x;
          console.log(x);
        });
    }
  }


}
