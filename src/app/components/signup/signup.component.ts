import { Component, OnInit } from '@angular/core';
import { BoxComponent } from '../box/box.component';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

interface AccountType {
  name: string;
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    BoxComponent,
    InputTextModule,
    ReactiveFormsModule,
    PasswordModule,
    FloatLabelModule,
    ButtonModule,
    DropdownModule,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  accountTypes: AccountType[] | undefined;

  signupForm = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
    confirmPassword: new FormControl(null),
    selectedType: new FormControl<AccountType | null>(null),
  });

  handleSubmit() {
    console.log(this.signupForm.value);
  }
  ngOnInit() {
    this.accountTypes = [{ name: 'Payer' }, { name: 'Shopper' }];
  }
}
