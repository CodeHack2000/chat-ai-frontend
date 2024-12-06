import { Component, inject } from '@angular/core';
import { ChatService } from '../../../services/chat.service';
import { UserMessageTextComponent } from "../../../components/texts/user-message-text/user-message-text.component";
import { BotMessageTextComponent } from "../../../components/texts/bot-message-text/bot-message-text.component";

@Component({
  selector: 'app-messages-card',
  imports: [UserMessageTextComponent, BotMessageTextComponent],
  templateUrl: './messages-card.component.html',
  styleUrl: './messages-card.component.scss'
})
export class MessagesCardComponent {

  chatService = inject(ChatService);
}
