import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { BoxComponent } from '../../box/box.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-link-bank-account-shopper',
  standalone: true,
  imports: [RouterLink, FormsModule, InputTextModule, FloatLabelModule, BoxComponent, ButtonModule],
  templateUrl: './link-bank-account-shopper.component.html',
  styleUrl: './link-bank-account-shopper.component.scss'
})
export class LinkBankAccountShopperComponent {

}
