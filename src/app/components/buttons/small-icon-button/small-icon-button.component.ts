import { Component, input, output } from '@angular/core';

import {  MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-small-icon-button',
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './small-icon-button.component.html',
  styleUrl: './small-icon-button.component.scss'
})
export class SmallIconButtonComponent {

  icon = input('');
  text = input('');
  onClick = output();
}
