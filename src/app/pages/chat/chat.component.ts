import { Component, inject } from '@angular/core';

import { ChatFieldComponent } from "../../components/inputs/chat-field/chat-field.component";
import { WelcomeCardComponent } from "./welcome-card/welcome-card.component";
import { ChatService } from '../../services/chat.service';
import { MessagesCardComponent } from "./messages-card/messages-card.component";
import { SecondaryTitleComponent } from "../../components/titles/secondary-title/secondary-title.component";

@Component({
  selector: 'app-chat',
  imports: [ChatFieldComponent, WelcomeCardComponent, MessagesCardComponent, SecondaryTitleComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  chatService = inject(ChatService);

  onSubmit(message: string) {
    this.chatService.addUserChatMessage(message, 'Resposta do bot');
  }
}
