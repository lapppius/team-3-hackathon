import { RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ITransaction } from '../../shared/interface/transaction.interface';
import { BoxComponent } from '../../box/box.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-view-transaction-history',
  standalone: true,
  imports: [
    RouterLink,
    TableModule,
    CommonModule,
    BoxComponent,
    FormsModule,
    CalendarModule,
    HttpClientModule,
  ],
  templateUrl: './view-transaction-history.component.html',
  styleUrl: './view-transaction-history.component.scss',
})
export class ViewTransactionHistoryComponent {
  transactions!: ITransaction[];

  constructor(private http: HttpClient) {}

  public shopId: string | null = '87654321';

  ngOnInit() {
    this.http
      .get<ITransaction[]>(
        `http://localhost:8080/transactions/to/${this.shopId}`
      )
      .subscribe((data) => {
        console.log('data: ', data);
        this.transactions = data;
      });
    console.log('ngOnInit: ', this.transactions);
  }
}
