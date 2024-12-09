import { Component, inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-scrollable-diaglog',
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './scrollable-diaglog.component.html',
  styleUrl: './scrollable-diaglog.component.scss'
})
export class ScrollableDiaglogComponent {

  data = inject(MAT_DIALOG_DATA);
}
