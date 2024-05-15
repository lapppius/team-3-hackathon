import { Component, Input } from '@angular/core';
import { Payer } from '../../models/app-models';
import { DatePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [DatePipe, ButtonModule, RouterLink],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss',
})
export class ProfileHeaderComponent {
  @Input() payer!: Payer;
}
