import { Component, input } from '@angular/core';

@Component({
  selector: 'app-help-text',
  imports: [],
  templateUrl: './help-text.component.html',
  styleUrl: './help-text.component.scss'
})
export class HelpTextComponent {

  text = input('');
}
