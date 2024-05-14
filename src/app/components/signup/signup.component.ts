import { Component } from '@angular/core';
import { BoxComponent } from '../box/box.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [BoxComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {}
