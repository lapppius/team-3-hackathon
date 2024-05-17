import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeaturesComponent } from '../features/features.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FeaturesComponent, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
