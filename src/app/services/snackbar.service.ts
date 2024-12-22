import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SnackbarComponent } from '../components/bars/snackbar/snackbar.component';
import { SnackBarModel } from '../models/snackbar.model';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message: string, level: number) {
    const snackbarData: SnackBarModel = {
      level,
      message
    };

    this.snackBar.openFromComponent(SnackbarComponent, {
      data: snackbarData,
      duration: 3000
    })
  }
}
