import { Component, Input } from '@angular/core';
import { User } from '../../../models/app-models';
import { DatePipe, JsonPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [DatePipe, ButtonModule, RouterLink, JsonPipe],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss',
})
export class ProfileHeaderComponent {
  @Input() user!: User;
}
