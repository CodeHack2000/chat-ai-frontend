import { Component, input } from '@angular/core';

@Component({
  selector: 'app-bot-message-text',
  imports: [],
  templateUrl: './bot-message-text.component.html',
  styleUrl: './bot-message-text.component.scss'
})
export class BotMessageTextComponent {

  text = input('');
}
