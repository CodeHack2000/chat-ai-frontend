import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-text-with-link',
  imports: [
    RouterLink
  ],
  templateUrl: './text-with-link.component.html',
  styleUrl: './text-with-link.component.scss'
})
export class TextWithLinkComponent {

  text = input('');
  linkText = input('');
  link = input('');
}
