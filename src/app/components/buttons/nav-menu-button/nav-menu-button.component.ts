import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-nav-menu-button',
  imports: [
    MatButtonModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './nav-menu-button.component.html',
  styleUrl: './nav-menu-button.component.scss'
})
export class NavMenuButtonComponent {

  text = input('');
  link = input('');
  icon = input('');
  onClick = output();
}
