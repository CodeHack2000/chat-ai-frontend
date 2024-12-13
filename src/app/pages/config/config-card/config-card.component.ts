import { Component, inject, output, signal } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user.model';
import { SmallIconButtonComponent } from "../../../components/buttons/small-icon-button/small-icon-button.component";
import { UserConfigService } from '../../../services/user-config.service';
import { SnackbarService } from '../../../services/snackbar.service';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MiniFabButtonComponent } from "../../../components/buttons/mini-fab-button/mini-fab-button.component";

@Component({
  selector: 'app-config-card',
  imports: [
    MatCardModule,
    SmallIconButtonComponent,
    MatButtonModule,
    MatIconModule,
    MiniFabButtonComponent
],
  templateUrl: './config-card.component.html',
  styleUrl: './config-card.component.scss'
})
export class ConfigCardComponent {

  changeCard = output<number>();

  authService = inject(AuthService);
  userConfigService = inject(UserConfigService);
  snackbarService = inject(SnackbarService);

  user = signal<User | undefined>(undefined);
  avatarUrl = signal('');
  isLoading = signal(false);

  constructor() {
    this.user.set(this.authService.getUser());
    if (this.user()?.avatar) {
      this.avatarUrl.set(`data:image/jpeg;base64,${this.user()?.avatar}`);
    }
    else {
      this.avatarUrl.set('assets/images/default_user.jpeg')
    }
  }

  onChangeCard(num: number) {
    this.changeCard.emit(num);
  }

  updateImgage(image: File) {
    this.isLoading.set(true);
    this.userConfigService.updateUserImage(image).subscribe((data) => {
      if (data.success) {
        this.snackbarService.openSnackBar('Imagem atualizada com sucesso!', 1);
      }
      else {
        this.snackbarService.openSnackBar('Ocorreu um erro ao atualizar a imagem!', 3);
      }
      this.isLoading.set(false);
    });
  }
}
