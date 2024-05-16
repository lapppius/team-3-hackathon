import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { RouterLink } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BoxComponent } from '../../box/box.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [BoxComponent, RouterLink, FormsModule, 
    InputTextModule, FloatLabelModule, ReactiveFormsModule,
     PasswordModule, ButtonModule, RippleModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}
