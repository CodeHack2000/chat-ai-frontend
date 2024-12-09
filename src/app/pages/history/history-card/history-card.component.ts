import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HistoryService } from '../../../services/history.service';
import { UserHistoryByDate } from '../../../models/history-messages.model';
import { UserMessageTextComponent } from "../../../components/texts/user-message-text/user-message-text.component";
import { BotMessageTextComponent } from "../../../components/texts/bot-message-text/bot-message-text.component";
import { MatDialog } from '@angular/material/dialog';
import { ScrollableDiaglogComponent } from '../../../components/dialogs/scrollable-diaglog/scrollable-diaglog.component';
import { BotProductsComponent } from "../../../components/dialogs/bot-products/bot-products.component";
import { SmallIconButtonComponent } from "../../../components/buttons/small-icon-button/small-icon-button.component";

@Component({
  selector: 'app-history-card',
  imports: [
    ScrollingModule,
    MatExpansionModule,
    UserMessageTextComponent,
    BotMessageTextComponent,
    BotProductsComponent,
    MatButtonModule,
    MatIconModule,
    SmallIconButtonComponent
],
  templateUrl: './history-card.component.html',
  styleUrl: './history-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryCardComponent {

  historyService = inject(HistoryService);
  readonly dialog = inject(MatDialog);

  userHistoryMessages = signal<UserHistoryByDate[]>([]);

  constructor() {
    this.historyService.getUserHistoryMessages().subscribe((data) => {
      this.userHistoryMessages.set(data.messages)
    });
  }

  updateUserHistoryMessages(): void {
    this.historyService.updateUserHistoryMessages().subscribe((data) => {
      this.userHistoryMessages.set(data.messages)
    });
  }

  openDialog(recommendedProducts: string): void {
    this.dialog.open(ScrollableDiaglogComponent, {
      data: {
        recommendedProducts,
        title: 'Produtos Recomendados pelo Chatbot'
      }
    });
  }

  trackByIdHistoryData(index: number, item: UserHistoryByDate): Date {
    return item.date;
  }
}
