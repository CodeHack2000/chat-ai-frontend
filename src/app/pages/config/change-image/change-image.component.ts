import { Component, inject, output, signal } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

import { SmallIconButtonComponent } from "../../../components/buttons/small-icon-button/small-icon-button.component";
import { UserConfigService } from '../../../services/user-config.service';
import { SnackbarService } from '../../../services/snackbar.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-change-image',
  imports: [
    MatCardModule,
    SmallIconButtonComponent,
    MatFormFieldModule
],
  templateUrl: './change-image.component.html',
  styleUrl: './change-image.component.scss'
})
export class ChangeImageComponent {

  changeCard = output<number>();
  setIsLoading = output<boolean>();

  userConfigService = inject(UserConfigService);
  snackbarService = inject(SnackbarService);
  authService = inject(AuthService);

  selectedFile = signal<File | null>(null);

  onChangeCard(num: number): void {
    this.selectedFile.set(null);
    this.changeCard.emit(num);
  }

  onFileChange(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.selectedFile.set(file);
    }
  }

  submit(): void {
    if (this.selectedFile() instanceof File) {
      this.setIsLoading.emit(true);
      this.userConfigService.updateUserImage(this.selectedFile()!).subscribe({
        next: (data) => {
          if (data.success) {
            this.snackbarService.openSnackBar('Imagem atualizada com sucesso!', 1);
          } else {
            this.snackbarService.openSnackBar('Ocorreu um erro ao atualizar a imagem!', 3);
          }
          this.setIsLoading.emit(false);
          window.location.reload();
        },
        error: () => {
            this.snackbarService.openSnackBar('Ocorreu um erro, valide os dados e tente novamente!', 2);
            this.setIsLoading.emit(false);
        },
      });
    }
  }
}
