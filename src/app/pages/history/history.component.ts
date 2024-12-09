import { Component } from '@angular/core';

import { SecondaryTitleComponent } from "../../components/titles/secondary-title/secondary-title.component";
import { SidenavWithButtonComponent } from "../../components/menu/sidenav-with-button/sidenav-with-button.component";
import { HistoryCardComponent } from "./history-card/history-card.component";

@Component({
  selector: 'app-history',
  imports: [SecondaryTitleComponent, SidenavWithButtonComponent, HistoryCardComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {

}
