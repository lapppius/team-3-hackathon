import { Component, Input } from '@angular/core';
import { Payer } from '../../models/app-models';
import { DatePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [DatePipe, ButtonModule],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss',
})
export class ProfileHeaderComponent {
  @Input() payer!: Payer;
}
