import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filtroCandidato'
})
export class FiltroCandidatoPipe implements PipeTransform {

  transform(itens: any[], searchText: string): any {
    if (!itens) return [];
    if (!searchText) return itens;

    searchText = searchText.toLowerCase();

    return itens.filter(it => it.nomeUrna.toLowerCase().includes(searchText));
  }

}
