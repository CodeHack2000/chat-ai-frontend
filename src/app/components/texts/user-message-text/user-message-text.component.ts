import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user-message-text',
  imports: [],
  templateUrl: './user-message-text.component.html',
  styleUrl: './user-message-text.component.scss'
})
export class UserMessageTextComponent {

  text = input('');
}
