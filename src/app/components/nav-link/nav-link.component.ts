import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './nav-link.component.html',
  styleUrl: './nav-link.component.scss',
})
export class NavLinkComponent {
  @Input() title: string = '';
  @Input() path: string = '';
}
