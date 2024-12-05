import { Component, EventEmitter, input } from '@angular/core';

import {
  MatButtonModule
} from '@angular/material/button';

@Component({
  selector: 'app-main-submit-button',
  imports: [
    MatButtonModule
  ],
  templateUrl: './main-submit-button.component.html',
  styleUrl: './main-submit-button.component.scss'
})
export class MainSubmitButtonComponent {

  buttonText = input('');

  onClick = new EventEmitter();
}
