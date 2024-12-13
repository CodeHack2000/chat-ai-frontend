import { Component } from '@angular/core';

import { SecondaryTitleComponent } from "../../components/titles/secondary-title/secondary-title.component";
import { SidenavWithButtonComponent } from "../../components/menu/sidenav-with-button/sidenav-with-button.component";
import { HistoryCardComponent } from "./history-card/history-card.component";
import { MainHeaderComponent } from "../../components/headers/main-header/main-header.component";

@Component({
  selector: 'app-history',
  imports: [SecondaryTitleComponent, SidenavWithButtonComponent, HistoryCardComponent, MainHeaderComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {

}
