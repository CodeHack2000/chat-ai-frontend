import { Component, inject, signal, ViewChild } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { ChatFieldComponent } from "../../components/inputs/chat-field/chat-field.component";
import { WelcomeCardComponent } from "./welcome-card/welcome-card.component";
import { ChatService } from '../../services/chat.service';
import { MessagesCardComponent } from "./messages-card/messages-card.component";
import { SidenavComponent } from "../../components/menu/sidenav/sidenav.component";
import { ProgressBarComponent } from "../../components/progress-bar/progress-bar.component";
import { MainHeaderComponent } from "../../components/headers/main-header/main-header.component";

@Component({
  selector: 'app-chat',
  imports: [ChatFieldComponent, WelcomeCardComponent, MessagesCardComponent, MatButtonModule, MatSidenavModule, MatIconModule, ProgressBarComponent, MainHeaderComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  @ViewChild('sidenav') sidenav!: SidenavComponent;

  chatService = inject(ChatService);

  isLoading = signal(false);

  /**
   * Toggle the sidenav open or closed.
   * @remarks
   * This is a convenience wrapper around the sidenav's own toggleDrawer method.
   */
  toggleSidenav() {
    this.sidenav.toggleDrawer();
  }

  /**
   * Called when the user submits a message to the chatbot.
   * Sends the message to the AI model and adds the response to the chat history.
   * @param message The user's message to send to the AI model.
   */
  onSubmit(message: string) {
    this.isLoading.set(true);
    this.chatService.sendMessageToModel(message).subscribe((botResponse) => {
      this.isLoading.set(false);
      this.chatService.addUserChatMessage(message, botResponse);
    });
  }
}
