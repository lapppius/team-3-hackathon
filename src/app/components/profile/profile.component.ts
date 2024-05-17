import { Component, OnInit, inject } from '@angular/core';
import { ProfileHeaderComponent } from '../shared/profile-header/profile-header.component';
import { User } from '../../models/app-models';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ProfileHeaderComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  user!: User;

  userService = inject(UserService);
  constructor() {}

  ngOnInit() {
    this.userService
      .getUserProfile('ede36c97-379a-4cae-b1e4-483ad8289ece')
      .subscribe((res) => {
        this.user = res;
      });
  }
}
