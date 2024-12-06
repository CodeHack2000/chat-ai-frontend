import { Component } from '@angular/core';
import { PrimaryTitleComponent } from "../../../components/titles/primary-title/primary-title.component";
import { HelpTextComponent } from "../../../components/texts/help-text/help-text.component";

@Component({
  selector: 'app-welcome-card',
  imports: [PrimaryTitleComponent, HelpTextComponent],
  templateUrl: './welcome-card.component.html',
  styleUrl: './welcome-card.component.scss'
})
export class WelcomeCardComponent {

}
