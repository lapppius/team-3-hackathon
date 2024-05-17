import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BoxComponent } from '../../box/box.component';
import { ProfileHeaderComponent } from '../../shared/profile-header/profile-header.component';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/app-models';

@Component({
  selector: 'app-shopper-profil',
  standalone: true,
  imports: [
    ButtonModule,
    RouterLink,
    RippleModule,
    BoxComponent,
    ProfileHeaderComponent,
  ],
  templateUrl: './shopper-profil.component.html',
  styleUrl: './shopper-profil.component.scss',
})
export class ShopperProfilComponent implements OnInit {
  shopper!: User;

  userService = inject(UserService);
  constructor() {}

  ngOnInit() {
    this.userService.getUserProfile('48477a39-f3d2-41d9-9fac-dafa829ee5d9').subscribe((res) => (this.shopper = res));
  }
}
