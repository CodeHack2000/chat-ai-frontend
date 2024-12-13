import { Component, inject, input } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

import { ScrollableDiaglogComponent } from '../scrollable-diaglog/scrollable-diaglog.component';

@Component({
  selector: 'app-bot-products',
  imports: [
    MatButtonModule
  ],
  templateUrl: './bot-products.component.html',
  styleUrl: './bot-products.component.scss'
})
export class BotProductsComponent {

  recommendedProducts = input('');

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(ScrollableDiaglogComponent, {
      data: {
        recommendedProducts: this.recommendedProducts,
        title: 'Produtos Recomendados pelo Chatbot'
      },
      maxWidth: '90vw',
      maxHeight: '90vh'
    });
  }
}
