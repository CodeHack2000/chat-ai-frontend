import { Component, inject, signal, ViewChild } from '@angular/core';

import { ChatFieldComponent } from "../../components/inputs/chat-field/chat-field.component";
import { WelcomeCardComponent } from "./welcome-card/welcome-card.component";
import { ChatService } from '../../services/chat.service';
import { MessagesCardComponent } from "./messages-card/messages-card.component";
import { SecondaryTitleComponent } from "../../components/titles/secondary-title/secondary-title.component";

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from "../../components/menu/sidenav/sidenav.component";
import { SidenavWithButtonComponent } from "../../components/menu/sidenav-with-button/sidenav-with-button.component";

import { MatIconModule } from '@angular/material/icon';
import { ProgressBarComponent } from "../../components/progress-bar/progress-bar.component";

@Component({
  selector: 'app-chat',
  imports: [ChatFieldComponent, WelcomeCardComponent, MessagesCardComponent, SecondaryTitleComponent, MatButtonModule, MatSidenavModule, MatIconModule, SidenavWithButtonComponent, SidenavWithButtonComponent, ProgressBarComponent],
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
