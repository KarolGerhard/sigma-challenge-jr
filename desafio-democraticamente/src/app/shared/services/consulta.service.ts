import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http: HttpClient) {
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
    sessionStorage.setItem(url, JSON.stringify(dados));
  }
}
