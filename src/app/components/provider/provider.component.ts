import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ITransactionProv } from '../shared/providerTransInterface/providerTransactions.interface';

@Component({
  selector: 'app-provider',
  standalone: true,
  imports: [RouterLink,TableModule, FormsModule,CommonModule],
  templateUrl: './provider.component.html',
  styleUrl: './provider.component.scss'
})
export class ProviderComponent {

  transactionsProv!: ITransactionProv[];

  constructor() {}

  ngOnInit() {
      
  }

}
