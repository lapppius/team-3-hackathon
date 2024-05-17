import { Component, OnInit, inject } from '@angular/core';
import { BoxComponent } from '../box/box.component';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { UserService } from '../../services/user.service';
import { ToastService } from '../../services/toast.service';
import { Router, RouterLink } from '@angular/router';

interface AccountType {
  name: string;
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    BoxComponent,
    InputTextModule,
    PasswordModule,
    FloatLabelModule,
    ButtonModule,
    DropdownModule,
    RouterLink,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  accountTypes: AccountType[] | undefined;

  userService = inject(UserService);
  toastService = inject(ToastService);
  router = inject(Router);

  signupForm = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
    confirmPassword: new FormControl(null),
    selectedType: new FormControl<AccountType | null>(null),
  });

  handleSubmit() {
    this.userService.signUpUser(this.signupForm.value).subscribe({
      next: (res) => {
        this.toastService.showSuccess('You successfully signed up!');
        //Navigates to login page after 1.5 seconds if signup is successful
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1500);
      },
      error: (error) => {
        console.log('Error signing up', error);
        this.toastService.showError(
          'An error occurred attempting to sign in! Check your credentials and try again!'
        );
      },
    });
  }
  ngOnInit() {
    this.accountTypes = [{ name: 'Payer' }, { name: 'Shopper' }];
  }
}
