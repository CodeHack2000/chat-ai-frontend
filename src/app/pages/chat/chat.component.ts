import { Component, inject, Input, ViewChild } from '@angular/core';

import { ChatFieldComponent } from "../../components/inputs/chat-field/chat-field.component";
import { WelcomeCardComponent } from "./welcome-card/welcome-card.component";
import { ChatService } from '../../services/chat.service';
import { MessagesCardComponent } from "./messages-card/messages-card.component";
import { SecondaryTitleComponent } from "../../components/titles/secondary-title/secondary-title.component";

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from "../../components/menu/sidenav/sidenav.component";

import { MatIconModule } from '@angular/material/icon';
import { SidenavWithButtonComponent } from "../../components/menu/sidenav-with-button/sidenav-with-button.component";

@Component({
  selector: 'app-chat',
  imports: [ChatFieldComponent, WelcomeCardComponent, MessagesCardComponent, SecondaryTitleComponent, MatButtonModule, MatSidenavModule, SidenavComponent, MatIconModule, SidenavWithButtonComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  @ViewChild('sidenav') sidenav!: SidenavComponent;

  chatService = inject(ChatService);

  toggleSidenav() {
    this.sidenav.toggleDrawer();
  }

  onSubmit(message: string) {
    this.chatService.addUserChatMessage(message, 'Resposta do bot');
  }
}
