import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalha-candidato',
  templateUrl: './detalha-candidato.component.html',
  styleUrls: ['./detalha-candidato.component.css']
})
export class DetalhaCandidatoComponent implements OnInit, OnChanges {

  @Input() candidato: any;

  public dadosCandidato: any;
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/2018/BR/2022802018/candidato/';
  }

  ngOnInit() {
  }

  ngOnChanges(): void {
    if (this.candidato) {
      const id = this.candidato.id;
      console.log(this.candidato);

      this.http.get(this.url + id)
        .subscribe(x => {
          this.dadosCandidato = x;
          console.log(x);
        });
    }
  }


}
