import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ITransactionProv } from '../shared/providerTransInterface/providerTransactions.interface';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-provider',
  standalone: true,
  imports: [
    RouterLink,
    TableModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './provider.component.html',
  styleUrl: './provider.component.scss',
})
export class ProviderComponent {
  transactionsProv!: ITransactionProv[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<ITransactionProv[]>('http://localhost:8080/transactions')
      .subscribe((data) => {
        console.log('data: ', data);
        this.transactionsProv = data;
      });
    console.log('ngOnInit: ', this.transactionsProv);
  }
}
