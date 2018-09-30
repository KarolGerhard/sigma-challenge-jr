import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {


  constructor(private http: HttpClient) {
  }

  obterEstados() {
    return this.http.get('assets/estados.json');
  }
}

