import { Component } from '@angular/core';
import { NavLink } from '../../../models/app-models';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';

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
