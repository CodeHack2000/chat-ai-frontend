import { Component, input } from '@angular/core';
import { LogoComponent } from "../../images/logo/logo.component";

@Component({
  selector: 'app-bot-message-text',
  imports: [LogoComponent],
  templateUrl: './bot-message-text.component.html',
  styleUrl: './bot-message-text.component.scss'
})
export class BotMessageTextComponent {

  text = input('');
}
