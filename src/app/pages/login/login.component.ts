import { Component } from '@angular/core';

import { PrimaryTitleComponent } from "../../components/titles/primary-title/primary-title.component";
import { TextFieldIconComponent } from "../../components/inputs/text-field-icon/text-field-icon.component";
import { PasswordFieldComponent } from "../../components/inputs/password-field/password-field.component";
import { MainSubmitButtonComponent } from "../../components/buttons/main-submit-button/main-submit-button.component";
import { ExternalLoginButtonComponent } from "../../components/buttons/external-login-button/external-login-button.component";
import { TextDividerComponent } from "../../components/dividers/text-divider/text-divider.component";
import { TextWithLinkComponent } from "../../components/texts/text-with-link/text-with-link.component";

@Component({
  selector: 'app-login',
  imports: [PrimaryTitleComponent, TextFieldIconComponent, PasswordFieldComponent, MainSubmitButtonComponent, ExternalLoginButtonComponent, TextDividerComponent, TextWithLinkComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email = '';
  password = '';

  onEmailChange(email: string) {
    this.email = email;
  }

  onPasswordChange(password: string) {
    this.password = password;
  }

  onSubmit() {
    alert(this.email + ' - ' + this.password);
  }
}
