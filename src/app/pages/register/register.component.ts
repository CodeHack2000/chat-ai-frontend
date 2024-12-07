import { Component, inject } from '@angular/core';

import { PrimaryTitleComponent } from "../../components/titles/primary-title/primary-title.component";
import { TextFieldIconComponent } from "../../components/inputs/text-field-icon/text-field-icon.component";
import { PasswordFieldComponent } from "../../components/inputs/password-field/password-field.component";
import { MainSubmitButtonComponent } from "../../components/buttons/main-submit-button/main-submit-button.component";
import { ExternalLoginButtonComponent } from "../../components/buttons/external-login-button/external-login-button.component";
import { TextDividerComponent } from "../../components/dividers/text-divider/text-divider.component";
import { TextWithLinkComponent } from "../../components/texts/text-with-link/text-with-link.component";
import { LogoComponent } from "../../components/images/logo/logo.component";
import { AuthService } from '../../services/auth.service';
import { UserRegister } from '../../models/user-register.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [PrimaryTitleComponent, TextFieldIconComponent, PasswordFieldComponent, MainSubmitButtonComponent, ExternalLoginButtonComponent, TextDividerComponent, TextWithLinkComponent, LogoComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  authService = inject(AuthService);
  router = inject(Router);

  username = '';
  email = '';
  password = '';

  onUsernameChange(username: string) {
    this.username = username;
  }

  onEmailChange(email: string) {
    this.email = email;
  }

  onPasswordChange(password: string) {
    this.password = password;
  }

  onSubmit() {
    const user: UserRegister = {
      name: this.username,
      email: this.email,
      password: this.password
    };

    this.authService.register(user).subscribe((result) => {
      if (result) {
        this.router.navigate(['/login']);
      }
    })
  }
}
