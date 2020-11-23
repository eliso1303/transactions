import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../enums/category.enum';
import { ITransaction } from '../interfaces/transaction.interface';
import { RestApiService } from '../shared/rest-api.service';


@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {

  @Input() TransactionDetails: ITransaction = { id: '', title: '', amount: 0, category: Category.PaymentService, date: '', comment: '' }

  @Output() onCloseClick = new EventEmitter();
  @Output() eventChange = new EventEmitter<Event>();

  public categories: Category[] = [Category.PaymentService, Category.Gasoline, Category.Food, Category.Charity, Category.Transport];

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit() { }

  closePopup() {
    this.onCloseClick.emit();
  }

  addTransaction(event: Event) {
    this.restApi.createTransaction(this.TransactionDetails).subscribe((data: {}) => { });
    this.eventChange.emit(event);
  }
}
