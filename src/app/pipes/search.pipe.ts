import { Pipe, PipeTransform } from '@angular/core';
import { IFilterMetaData } from '../interfaces/filtermetadata.interface';
import { ITransaction } from '../interfaces/transaction.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: ITransaction[], searchText: string, filterMetadata: IFilterMetaData): ITransaction[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      filterMetadata.sum = items.reduce((total, current) => total + current.amount, 0);
      filterMetadata.count = items.length;
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    let filteredItems = items.filter((item) => {
      return item.title.toLocaleLowerCase().includes(searchText)
        || item.category.toLocaleLowerCase().includes(searchText)
        || item.comment.toLocaleLowerCase().includes(searchText);
    });

    filterMetadata.count = filteredItems.length;
    filterMetadata.sum = filteredItems.reduce((total, current) => total + current.amount, 0);

    return filteredItems;
  }

}
