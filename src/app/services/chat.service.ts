import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { ChatMessage, Message } from '../models/chat-message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private messages = signal<ChatMessage[]>([
    {
      userId: '1',
      messages: []
    }
  ]);

  /**
        {
          id: 0,
          userMessage: 'Mensagem de teste',
          botMessage: 'Olá! Tudo funcionando por aqui. Como posso ajudar você hoje?'
        }
       */

  constructor(private http: HttpClient) { }

  /**
   * @description
   * Gets the current session id.
   * @returns
   * The current session id.
   */
  private getSession(): string {
    //! Remover o comentário abaixo
    //return this.http.get('session-id').subscribe().toString();
    return '1';
  }

  /**
   * @description
   * Retrieves the next message ID for the current user.
   *
   * @returns
   * The number representing the next message ID, which is the current count of messages for the user.
   * If the user has no messages, returns 0.
   */
  getUserNextMessageId(): number {
    const userId = this.getSession();
    const userChatMessages = this.messages().find((item: ChatMessage) => item.userId === userId);
    return userChatMessages?.messages.length || 0;
  }

  /**
   * @description
   * Adds a new message to the user's chat messages, and another to the bot's chat messages.
   * @param userMessage The message to add to the user's chat messages.
   * @param botMessage The message to add to the bot's chat messages.
   */
  addUserChatMessage(userMessage: string, botMessage: string) {
    const userId = this.getSession();
    const userChatMessages = this.messages().find((item: ChatMessage) => item.userId === userId);
    const userNextMessageId = this.getUserNextMessageId();
    const message: Message = { id: userNextMessageId, userMessage, botMessage };

    if (userChatMessages) {
      userChatMessages.messages.push(message);
      this.messages.set([...this.messages(), userChatMessages]);
    }
    else {
      const userChatMessages: ChatMessage = { userId, messages: [message] };
      this.messages.set([...this.messages(), userChatMessages]);
    }
  }

  /**
   * @description
   * Gets the user's chat messages.
   * @returns
   * An array of the user's chat messages.
   */
  getUserChatMessages(): Message[] {
    const userId = this.getSession();
    return this.messages().find((item: ChatMessage) => item.userId === userId)?.messages || [];
  }
}
