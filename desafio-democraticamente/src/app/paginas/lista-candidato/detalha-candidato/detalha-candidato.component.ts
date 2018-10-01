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
  @Input() estado: string;

  public dadosCandidato: any;
  public showSpinner = false;

  constructor(private consultaService: ConsultaService) {
  }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.consultar();
  }

  public consultar() {
    if (this.candidato) {
      this.showSpinner = true;
      const id = this.candidato.id;
      this.consultaService.buscaDetalhesCandidato(this.candidato.cargo.codigo, id, this.estado)
        .subscribe(x => {
          this.dadosCandidato = x;
          this.showSpinner = false;
        }, error1 => console.log(error1));
    }
  }
}
