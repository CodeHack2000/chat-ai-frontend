import { Component, EventEmitter, Input, input, Output, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

import {
  MatFormFieldModule
} from '@angular/material/form-field';
import {
  MatInputModule
} from '@angular/material/input';
import {
  MatIconModule
} from '@angular/material/icon';
import {
  MatButtonModule
} from '@angular/material/button';
@Component({
  selector: 'app-password-field',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './password-field.component.html',
  styleUrl: './password-field.component.scss',
  providers: [NgModel]
})
export class PasswordFieldComponent {

  @Input() getErrorMessage!: (control: NgModel) => string;
  @Input() passwordPattern: RegExp = new RegExp('');
  @Output() valueChange = new EventEmitter<string>();
  required = input(false);

  text = '';
  hide = signal(true);


  onInputChange() {
    this.valueChange.emit(this.text);
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
