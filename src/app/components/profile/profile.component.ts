import { Component, inject } from '@angular/core';
import { ProfileHeaderComponent } from '../profile-header/profile-header.component';
import { Payer } from '../../models/app-models';
import { PayerService } from '../../services/payer.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ProfileHeaderComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  payer!: Payer;

  payerService = inject(PayerService);
  constructor() {
    this.payer = this.payerService.getPayerProfile();
  }
}
