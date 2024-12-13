import { Component, input } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-mini-fab-button',
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './mini-fab-button.component.html',
  styleUrl: './mini-fab-button.component.scss'
})
export class MiniFabButtonComponent {

  icon = input('');
}
