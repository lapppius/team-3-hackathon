import { Component, inject } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Router, RouterLink } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BoxComponent } from '../../box/box.component';
import { UserService } from '../../../services/user.service';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    BoxComponent,
    InputTextModule,
    PasswordModule,
    FloatLabelModule,
    ButtonModule,
    RouterLink,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  userService = inject(UserService);
  toastService = inject(ToastService);
  router = inject(Router);

  loginForm = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
  });

  handleSubmit() {
    this.userService.signInUser(this.loginForm.value).subscribe({
      next: (res) => {
        this.toastService.showSuccess('You successfully signed in!');
        //Navigates to login page after 1.5 seconds if signup is successful
        setTimeout(() => {
          this.router.navigate(['/profile']);
        }, 1500);
      },
      error: (error) => {
        console.log('Error signing up', error);
        this.toastService.showError('An error occurred attempting to sign up!');
      },
    });
  }
}
