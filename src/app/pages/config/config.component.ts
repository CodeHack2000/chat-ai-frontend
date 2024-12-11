import { Component, inject, signal } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

import { SecondaryTitleComponent } from "../../components/titles/secondary-title/secondary-title.component";
import { SidenavWithButtonComponent } from "../../components/menu/sidenav-with-button/sidenav-with-button.component";
import { ProgressBarComponent } from "../../components/progress-bar/progress-bar.component";
import { PrimaryTitleComponent } from "../../components/titles/primary-title/primary-title.component";
import { AuthService } from '../../services/auth.service';
import { ConfigCardComponent } from "./config-card/config-card.component";
import { ChangeImageComponent } from "./change-image/change-image.component";

@Component({
  selector: 'app-config',
  imports: [
    SecondaryTitleComponent,
    SidenavWithButtonComponent,
    ProgressBarComponent,
    PrimaryTitleComponent,
    MatCardModule,
    ConfigCardComponent,
    ChangeImageComponent
],
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss'
})
export class ConfigComponent {

  authService = inject(AuthService);

  showCard= signal(0);
  isLoading = signal(false);

  changeCard(num: number) {
    this.showCard.set(num);
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading.set(isLoading);
  }
}
