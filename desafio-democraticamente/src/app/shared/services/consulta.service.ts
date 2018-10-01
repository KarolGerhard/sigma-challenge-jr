import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private ESTADO_PADRAO = `MT`;
  private URL_PRESIDENTE = `http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/BR/2022802018/1/candidatos`;
  private URL_DETALHA_PRESIDENTE = `http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/2018/BR/2022802018/candidato/`;

  private URL_GOVERNADOR = `http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/${this.ESTADO_PADRAO}/2022802018/3/candidatos`;
  private URL_SENADOR = `http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/${this.ESTADO_PADRAO}/2022802018/5/candidatos`;
  private URL_DEPUTADO_ESTADUAL = `http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/${this.ESTADO_PADRAO}/2022802018/7/candidatos`;
  private URL_DEPUTADO_FEDERAL = `http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/${this.ESTADO_PADRAO}/2022802018/6/candidatos`;
  private URL_DETALHA_OUTROS = `http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/2018/${this.ESTADO_PADRAO}/2022802018/candidato/`;

  constructor(private http: HttpClient) {
  }

  public buscarCandidatos(cargo: string, estado?: string) {
    let url = '';
    switch (cargo) {
      case 'presidente':
        url = this.URL_PRESIDENTE;
        break;
      case 'senador':
        url = this.URL_SENADOR;
        break;
      case 'deputado federal':
        url = this.URL_DEPUTADO_FEDERAL;
        break;
      case 'deputado estadual':
        url = this.URL_DEPUTADO_ESTADUAL;
        break;
      case 'governador':
        url = this.URL_GOVERNADOR;
        break;
      default:
        return throwError('Cargo inválido');
    }

    if (estado) {
      url = url.replace(this.ESTADO_PADRAO, estado);
      console.log(url);
    }

    return this.get(url)
      .pipe(map(x => x.candidatos));
  }

  public buscaDetalhesCandidato(codigoCargo: string, idCandidato: string, estado?: string) {
    let url = +codigoCargo === 1 || codigoCargo === 'presidente' ? this.URL_DETALHA_PRESIDENTE : this.URL_DETALHA_OUTROS;
    if (estado) {
      url = url.replace(this.ESTADO_PADRAO, estado);
    }
    return this.get(url + idCandidato);
  }

  public get(url: string): Observable<any> {
    const doCache = this.getCache(url);
    if (doCache) {
      return doCache;
    } else {
      return this.http.get(url)
        .pipe(tap(x => this.gravarNoCache(url, x)));
    }
  }

  private getCache(url: string) {
    const cache = JSON.parse(sessionStorage.getItem(url));
    if (cache) {
      return of(cache);
    } else {
      return false;
    }
  }

  private gravarNoCache(url: string, dados: any): void {
    try {
      sessionStorage.setItem(url, JSON.stringify(dados));
    } catch (e) {
      sessionStorage.clear();
      sessionStorage.setItem(url, JSON.stringify(dados));
    }
  }
}
