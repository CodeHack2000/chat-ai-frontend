import { Component, inject, signal } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

import { ProgressBarComponent } from "../../components/progress-bar/progress-bar.component";
import { PrimaryTitleComponent } from "../../components/titles/primary-title/primary-title.component";
import { AuthService } from '../../services/auth.service';
import { ConfigCardComponent } from "./config-card/config-card.component";
import { ChangeImageComponent } from "./change-image/change-image.component";
import { User } from '../../models/user.model';
import { MainHeaderComponent } from "../../components/headers/main-header/main-header.component";

@Component({
  selector: 'app-config',
  imports: [
    ProgressBarComponent,
    PrimaryTitleComponent,
    MatCardModule,
    ConfigCardComponent,
    ChangeImageComponent,
    MainHeaderComponent
],
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss'
})
export class ConfigComponent {

  authService = inject(AuthService);

  showCard= signal(0);
  isLoading = signal(false);
  user = signal<User | undefined>(undefined);
  avatarUrl = signal('');

  constructor() {
    this.user.set(this.authService.getUser());
    if (this.user()?.avatar) {
      this.avatarUrl.set(`data:image/jpeg;base64,${this.user()?.avatar}`);
    }
    else {
      this.avatarUrl.set('assets/images/default_user.jpeg')
    }
  }

  changeCard(num: number) {
    this.showCard.set(num);
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading.set(isLoading);
  }
}
