import { Component, Input } from '@angular/core';
import { NavLinkComponent } from '../nav-link/nav-link.component';
import { NavLink } from '../../models/app-models';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [NavLinkComponent],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss',
})
export class NavMenuComponent {
  @Input() navLinks: NavLink[] = [];
}
