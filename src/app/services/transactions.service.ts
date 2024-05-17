import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITransaction } from '../models/app-models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  http = inject(HttpClient);

  constructor() {}

  getPayerTransactions(id: string): Observable<ITransaction[]> {
    return this.http.get<ITransaction[]>(
      `http://localhost:8080/transactions/from/${id}`
    );
  }

  getShopperTransactions(id: string): Observable<ITransaction[]> {
    return this.http.get<ITransaction[]>(
      `http://localhost:8080/transactions/to/${id}`
    );
  }
}
