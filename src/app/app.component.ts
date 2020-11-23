import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'transactions-app';
  searchText: string = '';
  public popupShow = false;
  public event: Event | any;

  transactionFilter(value: string) {
    this.searchText = value;
  }

  onChange(event: Event) {
    this.event = event;
  }
}
