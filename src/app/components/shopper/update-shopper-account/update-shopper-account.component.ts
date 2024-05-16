import { Component } from '@angular/core';
import { BoxComponent } from '../../box/box.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-update-shopper-account',
  standalone: true,
  imports: [BoxComponent, ButtonModule, FormsModule, InputTextModule, FloatLabelModule,],
  templateUrl: './update-shopper-account.component.html',
  styleUrl: './update-shopper-account.component.scss'
})
export class UpdateShopperAccountComponent {

}
