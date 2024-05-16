
import { RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ITransaction } from '../../shared/interface/transaction.interface';
import { BoxComponent } from '../../box/box.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';


@Component({
  selector: 'app-view-transaction-history',
  standalone: true,
  imports: [RouterLink, TableModule, CommonModule, BoxComponent, FormsModule, CalendarModule],
  templateUrl: './view-transaction-history.component.html',
  styleUrl: './view-transaction-history.component.scss'
})

export class ViewTransactionHistoryComponent {
    transactions!: ITransaction[];

    constructor() {}
  
    rangeDates: Date[] | undefined;

    ngOnInit() {
        
    }
}


