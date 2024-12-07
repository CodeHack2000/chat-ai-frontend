import { Component, inject } from '@angular/core';

import { PrimaryTitleComponent } from "../../components/titles/primary-title/primary-title.component";
import { TextFieldIconComponent } from "../../components/inputs/text-field-icon/text-field-icon.component";
import { PasswordFieldComponent } from "../../components/inputs/password-field/password-field.component";
import { MainSubmitButtonComponent } from "../../components/buttons/main-submit-button/main-submit-button.component";
import { ExternalLoginButtonComponent } from "../../components/buttons/external-login-button/external-login-button.component";
import { TextDividerComponent } from "../../components/dividers/text-divider/text-divider.component";
import { TextWithLinkComponent } from "../../components/texts/text-with-link/text-with-link.component";
import { LogoComponent } from "../../components/images/logo/logo.component";
import { UserLogin } from '../../models/user-login.mode';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [PrimaryTitleComponent, TextFieldIconComponent, PasswordFieldComponent, MainSubmitButtonComponent, ExternalLoginButtonComponent, TextDividerComponent, TextWithLinkComponent, LogoComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  authService = inject(AuthService);
  router = inject(Router);

  email = '';
  password = '';

  onEmailChange(email: string) {
    this.email = email;
  }

  onPasswordChange(password: string) {
    this.password = password;
  }

  onSubmit() {
    const user: UserLogin = {
      email: this.email,
      password: this.password
    };

    this.authService.login(user).subscribe((result: boolean) => {
      if (result) {
        this.router.navigate(['/']);
      }
    });
  }
}
