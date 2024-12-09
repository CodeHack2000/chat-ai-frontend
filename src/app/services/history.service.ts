import { inject, Injectable, signal } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { catchError, map, Observable, of } from 'rxjs';
import { ApiHistoryResponse, UserHistory, UserHistoryByDate, UserHistoryMessages } from '../models/history-messages.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private usersHistoryMessages = signal<UserHistoryMessages[]>([]);
  private baseUrl = 'http://localhost:3100';

  authService = inject(AuthService);

  constructor(private http: HttpClient) { }

  /**
   * Retrieves the user's chat history messages from the server.
   * @returns An Observable that resolves to an array of HistoryMessages,
   * which is the user's chat history messages. If the request fails, the Observable
   * returned by catchError is resolved with an empty array.
   */
  getUserHistoryMessages(): Observable<UserHistoryMessages> {
    const userId = this.authService.getUserUUID();
    const historyMessages = this.usersHistoryMessages().find((item: UserHistoryMessages) => item.userId === userId);

    if (historyMessages) {
      return of(historyMessages);
    }
    else {
      return this.updateUserHistoryMessages();
    }
  }

  /**
   * Updates the user's chat history messages on the server and returns the updated messages.
   * @returns An Observable that resolves to an array of HistoryMessages, which is the user's
   * updated chat history messages. If the request fails, the Observable returned by
   * catchError is resolved with an empty array.
   */
  updateUserHistoryMessages(): Observable<UserHistoryMessages> {
    const url = this.baseUrl + '/history/getUserHistory';
    const userId = this.authService.getUserUUID();

    return this.http.get<ApiHistoryResponse[]>(url, { observe: 'response', withCredentials: true }).pipe(
      map((response) => {
        const messages = response.body as ApiHistoryResponse[];
        const userHistoryMessages: UserHistoryMessages = {
          userId: userId!,
          messages: this.mapMessagesByDate(messages),
          lastUpdate: new Date()
        }
        this.usersHistoryMessages.set([...this.usersHistoryMessages(), userHistoryMessages]);
        return userHistoryMessages;
      }),
      catchError(() => of({} as UserHistoryMessages))
    );
  }

  mapMessagesByDate(messages: ApiHistoryResponse[]): UserHistoryByDate[] {
    const userHistoryByDate: UserHistoryByDate[] = [];
    const uniqueDates: Set<string> = new Set();

    messages.forEach((message) => {
      const date = new Date(message.createdAt);
      const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

      if (!uniqueDates.has(formattedDate)) {
        uniqueDates.add(formattedDate);
        userHistoryByDate.push({ date: new Date(date.getFullYear(), date.getMonth(), date.getDate()), messages: [] });
      }

      const userHistoryMessagesByDate: UserHistory = {
        userMessage: message.userMessage,
        botMessage: message.botMessage,
        recommendedProducts: message.recommendedProducts
      };

      userHistoryByDate.find((item: UserHistoryByDate) => item.date.toDateString() === date.toDateString())?.messages.push(userHistoryMessagesByDate);
    });

    return userHistoryByDate
      .filter((item: UserHistoryByDate) => item.messages.length > 0)
      .sort((a: UserHistoryByDate, b: UserHistoryByDate) => {
        return a.date.getTime() - b.date.getTime();
      })
  }
}
