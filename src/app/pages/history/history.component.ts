import { Component } from '@angular/core';

import { HistoryCardComponent } from "./history-card/history-card.component";
import { MainHeaderComponent } from "../../components/headers/main-header/main-header.component";

@Component({
  selector: 'app-history',
  imports: [HistoryCardComponent, MainHeaderComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {

}
