import { Component, input } from '@angular/core';

@Component({
  selector: 'app-text-divider',
  imports: [],
  templateUrl: './text-divider.component.html',
  styleUrl: './text-divider.component.scss'
})
export class TextDividerComponent {

  text = input('');
}
