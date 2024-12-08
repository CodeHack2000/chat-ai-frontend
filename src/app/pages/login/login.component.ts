import { Component, inject } from '@angular/core';

import { PrimaryTitleComponent } from "../../components/titles/primary-title/primary-title.component";
import { ExternalLoginButtonComponent } from "../../components/buttons/external-login-button/external-login-button.component";
import { TextDividerComponent } from "../../components/dividers/text-divider/text-divider.component";
import { TextWithLinkComponent } from "../../components/texts/text-with-link/text-with-link.component";
import { LogoComponent } from "../../components/images/logo/logo.component";
import { UserLogin } from '../../models/user-login.mode';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LoginFormComponent } from "../../components/forms/login-form/login-form.component";

@Component({
  selector: 'app-login',
  imports: [
    PrimaryTitleComponent,
    ExternalLoginButtonComponent,
    TextDividerComponent,
    TextWithLinkComponent,
    LogoComponent,
    LoginFormComponent
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
