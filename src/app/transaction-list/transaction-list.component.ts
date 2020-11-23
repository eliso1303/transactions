import { Component, Input, OnInit } from '@angular/core';
import { IFilterMetaData } from '../interfaces/filtermetadata.interface';
import { ITransaction } from '../interfaces/transaction.interface';
import { RestApiService } from '../shared/rest-api.service';



@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  @Input() searchText: string = '';
  @Input()
  set event(event: Event) {
    if (event) {
      this.loadTransactions();
    }
  }

  public active = -1;
  filterMetadata: IFilterMetaData = { count: 0, sum: 0 };
  transactions: ITransaction[] = [];

  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.loadTransactions();
  }

  loadTransactions() {
    return this.restApi.getTransactions().subscribe((data: ITransaction[]) => {
      this.transactions = data;
    })
  }

  setActive(index: number) {
    this.active = this.active === index ? -1 : index;
  }

}
