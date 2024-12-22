import { Component, inject } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatListModule } from '@angular/material/list';

import { ChatService } from '../../../services/chat.service';
import { UserMessageTextComponent } from "../../../components/texts/user-message-text/user-message-text.component";
import { BotMessageTextComponent } from "../../../components/texts/bot-message-text/bot-message-text.component";
import { Message } from '../../../models/chat-message.model';

@Component({
  selector: 'app-messages-card',
  imports: [
    UserMessageTextComponent,
    BotMessageTextComponent,
    MatListModule,
    ScrollingModule
  ],
  templateUrl: './messages-card.component.html',
  styleUrl: './messages-card.component.scss'
})
export class MessagesCardComponent {

  chatService = inject(ChatService);

  trackById(index: number, item: Message): number {
    return Number(item.id);
  }
}
