import { Component } from '@angular/core';
import {RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BoxComponent } from '../../box/box.component';

@Component({
  selector: 'app-shopper-profil',
  standalone: true,
  imports: [ButtonModule, RouterLink, RippleModule, BoxComponent],
  templateUrl: './shopper-profil.component.html',
  styleUrl: './shopper-profil.component.scss'
})

export class ShopperProfilComponent {

}
