import { Component } from '@angular/core';
import { FeatureItemComponent } from '../feature-item/feature-item.component';
import { PrimeIcons } from 'primeng/api';
@Component({
  selector: 'app-features',
  standalone: true,
  imports: [FeatureItemComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  features = [
    { title: 'Pay at Shops', icon: 'payments' },
    {
      title: 'Earn Cashback Credits',
      icon: 'redeem',
    },
    { title: 'Secure Transactions', icon: 'enhanced_encryption' },
    { title: 'Reduced Fees for Shop Owners', icon: 'attach_money' },
    { title: '24/7 Support', icon: 'support_agent' },
    {
      title: 'Better Control Over Your Expenses',
      icon: 'savings',
    },
  ];
}
