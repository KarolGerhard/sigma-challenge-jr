import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filtroCandidato'
})
export class FiltroCandidatoPipe implements PipeTransform {

  transform(items: any[], searchText: string): any {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter(it => it.nomeUrna.toLowerCase().includes(searchText));
  }

}
