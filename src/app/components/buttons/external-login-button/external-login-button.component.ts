import { Component, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import {
  MatButtonModule
} from '@angular/material/button';
import {
  MatIconModule,
  MatIconRegistry
} from '@angular/material/icon';

@Component({
  selector: 'app-external-login-button',
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './external-login-button.component.html',
  styleUrl: './external-login-button.component.scss'
})
export class ExternalLoginButtonComponent {

  buttonText = input('');
  replyLink = input('');
  icon = input('')

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {

    this.matIconRegistry.addSvgIcon(
      'google_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/google.svg')
    );
  }
}
