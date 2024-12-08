import { Component, inject, signal } from '@angular/core';
import { NgModel, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { TextFieldIconComponent } from '../../inputs/text-field-icon/text-field-icon.component';
import { PasswordFieldComponent } from '../../inputs/password-field/password-field.component';
import { MainSubmitButtonComponent } from '../../buttons/main-submit-button/main-submit-button.component';
import { AuthService } from '../../../services/auth.service';
import { UserLogin } from '../../../models/user-login.mode';
import { SnackbarService } from '../../../services/snackbar.service';

@Component({
  selector: 'app-login-form',
  imports: [
    TextFieldIconComponent,
    PasswordFieldComponent,
    MainSubmitButtonComponent,
    FormsModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  authService = inject(AuthService);
  router = inject(Router);
  snackbarService = inject(SnackbarService);

  email = '';
  password = '';
  formIsInvalid = signal(true);

  emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,50}$/;

  onEmailChange(email: string) {
    this.email = email;
    this.validateForm();
  }

  onPasswordChange(password: string) {
    this.password = password;
    this.validateForm();
  }

  validateForm() {
    const isEmailValid = this.emailPattern.test(this.email);
    const isPasswordValid = this.passwordPattern.test(this.password);
    this.formIsInvalid.set(!isEmailValid || !isPasswordValid);
  }

  getEmailErrorMessage(control: NgModel): string {
    if (control.hasError('required')) {
      return 'O email é obrigatório';
    }
    if (control.hasError('pattern')) {
      return 'O email não é válido';
    }
    return '';
  }

  getPasswordErrorMessage(control: NgModel): string {
    if (control.hasError('required')) {
      return 'A palavra-passe é obrigatória';
    }
    if (control.hasError('pattern')) {
      return 'A palavra-passe não cumpre os requisitos';
    }
    return '';
  }

  onSubmit() {
    const user: UserLogin = {
      email: this.email,
      password: this.password
    };

    this.authService.login(user).subscribe((result: boolean) => {
      if (result) {
        this.snackbarService.openSnackBar('Login efetuado com sucesso!', 1);
        this.router.navigate(['/']);
      }
      else {
        this.snackbarService.openSnackBar('Credenciais inválidas!', 2);
      }
    });
  }
}
