import { Component, Inject, signal } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

import { SnackBarModel } from '../../../models/snackbar.model';

@Component({
  selector: 'app-snackbar',
  imports: [
    MatIconModule
  ],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss'
})
export class SnackbarComponent {

  icon = signal('');
  barColor = signal('');
  iconColor = signal('');
  message = signal('');

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackBarModel) {}

  ngOnInit() {
    if (this.data.level === 1) {
      this.icon.set('done');
      this.barColor.set('bg-primary');
      this.iconColor.set('text-primary');
    }
    else if (this.data.level === 2) {
      this.icon.set('error');
      this.barColor.set('bg-surfaceContainerLowest');
      this.iconColor.set('text-surfaceContainerLowest');
    }
    else {
      this.icon.set('report');
      this.barColor.set('bg-onError');
      this.iconColor.set('text-onError');
    }

    this.message.set(this.data.message);
  }
}
