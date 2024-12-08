import { Component } from '@angular/core';

import { PrimaryTitleComponent } from "../../components/titles/primary-title/primary-title.component";
import { ExternalLoginButtonComponent } from "../../components/buttons/external-login-button/external-login-button.component";
import { TextDividerComponent } from "../../components/dividers/text-divider/text-divider.component";
import { TextWithLinkComponent } from "../../components/texts/text-with-link/text-with-link.component";
import { LogoComponent } from "../../components/images/logo/logo.component";
import { RegisterFormComponent } from "../../forms/register-form/register-form.component";

@Component({
  selector: 'app-register',
  imports: [PrimaryTitleComponent, ExternalLoginButtonComponent, TextDividerComponent, TextWithLinkComponent, LogoComponent, RegisterFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
