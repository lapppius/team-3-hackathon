import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HeaderComponent } from './components/shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'team-3-hackathon';
}
