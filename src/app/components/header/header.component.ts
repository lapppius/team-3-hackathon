import { Component } from '@angular/core';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { NavLink } from '../../models/app-models';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navLinks: NavLink[] = [{ title: 'Home', path: '/' }];

  joinLinks: NavLink[] = [
    { title: 'Sign up', path: '/signup' },
    { title: 'login', path: '/login' },
  ];
}
