import { Component, inject, signal } from '@angular/core';
import { NgModel, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { TextFieldIconComponent } from '../../components/inputs/text-field-icon/text-field-icon.component';
import { PasswordFieldComponent } from '../../components/inputs/password-field/password-field.component';
import { MainSubmitButtonComponent } from '../../components/buttons/main-submit-button/main-submit-button.component';
import { AuthService } from '../../services/auth.service';
import { SnackbarService } from '../../services/snackbar.service';
import { UserRegister } from '../../models/user-register.model';

@Component({
  selector: 'app-register-form',
  imports: [
    TextFieldIconComponent,
    PasswordFieldComponent,
    MainSubmitButtonComponent,
    FormsModule
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {

  authService = inject(AuthService);
  router = inject(Router);
  snackbarService = inject(SnackbarService);

  username = '';
  email = '';
  password = '';
  formIsInvalid = signal(true);

  usernamePattern = /^[a-zA-Z0-9]{3,255}$/;
  emailPattern = /^[^\s@]{1,255}@{1}[^\s@]{1,255}\.{1}[^\s@]{1,255}$/;
  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,50}$/;

  onUsernameChange(username: string) {
    this.username = username;
    this.validateForm();
  }

  onEmailChange(email: string) {
    this.email = email;
    this.validateForm();
  }

  onPasswordChange(password: string) {
    this.password = password;
    this.validateForm();
  }

  validateForm() {
    const isUsernameValid = this.usernamePattern.test(this.username);
    const isEmailValid = this.emailPattern.test(this.email);
    const isPasswordValid = this.passwordPattern.test(this.password);
    this.formIsInvalid.set(!isEmailValid || !isPasswordValid || !isUsernameValid);
  }

  getUsernameErrorMessage(control: NgModel): string {
    if (control.hasError('required')) {
      return 'O nome de utilizador é obrigatório';
    }
    if (control.hasError('pattern')) {
      return 'O nome de utilizador não é válido';
    }
    return '';
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
    const user: UserRegister = {
      name: this.username,
      email: this.email,
      password: this.password
    };

    this.authService.register(user).subscribe((result: boolean) => {
      if (result) {
        this.router.navigate(['/login']);
        this.snackbarService.openSnackBar('Registo efetuado com sucesso!', 1);
      }
      else {
        this.snackbarService.openSnackBar('Ocorreu um erro no registo!', 2);
      }
    });
  }
}
