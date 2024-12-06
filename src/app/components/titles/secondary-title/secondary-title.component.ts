import { Component, input } from '@angular/core';

@Component({
  selector: 'app-secondary-title',
  imports: [],
  templateUrl: './secondary-title.component.html',
  styleUrl: './secondary-title.component.scss'
})
export class SecondaryTitleComponent {

  text = input('');
}
