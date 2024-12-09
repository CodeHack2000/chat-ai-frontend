import { inject, Injectable, signal } from '@angular/core';
import { ChatMessage, Message } from '../models/chat-message.model';
import { CookieService } from 'ngx-cookie-service';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private messages = signal<ChatMessage[]>([]);
  private baseUrl = 'http://localhost:3100';

  authService = inject(AuthService);

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  /**
   * @description
   * Adds a new message to the user's chat messages, and another to the bot's chat messages.
   * @param userMessage The message to add to the user's chat messages.
   * @param botMessage The message to add to the bot's chat messages.
   */
  addUserChatMessage(userMessage: string, botMessage: string) {
    const userId = this.authService.getUserUUID()!;
    const userChatMessagesIndex = this.messages().findIndex((item: ChatMessage) => item.userId === userId);
    const userNextMessageId = crypto.randomUUID();
    const message: Message = { id: userNextMessageId, userMessage, botMessage };

    if (userChatMessagesIndex !== -1) {
      // Clone the existing messages and update the entry
      const updatedMessages = [...this.messages()];
      const userChatMessages = updatedMessages[userChatMessagesIndex];
      userChatMessages.messages = [...userChatMessages.messages, message];
      this.messages.set(updatedMessages); // Update the signal with a new reference
    } else {
      // Add a new entry for this user
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
    const userId = this.authService.getUserUUID()!;
    return this.messages().find((item: ChatMessage) => item.userId === userId)?.messages || [];
  }

  /**
   * Makes an HTTP POST request to the /openAi/sendMessageToModel route to send a message to the AI model.
   * @param message The message to send to the AI model.
   * @returns An Observable that resolves to the response from the AI model. If the request fails, the Observable
   * returned by catchError is resolved with 'Error sending message'.
   */
  sendMessageToModel(message: string): Observable<string> {
    const url = this.baseUrl + '/openAi/sendMessageToModel';
    const body = { message };

    return this.http.post<string>(url, body, {
      withCredentials: true,
    }).pipe(
      map((response) => response as string),
      catchError(() => of('Error sending message'))
    );
  }
}
