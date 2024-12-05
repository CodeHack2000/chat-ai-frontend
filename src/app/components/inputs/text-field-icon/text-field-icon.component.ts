import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  MatFormFieldModule
} from '@angular/material/form-field';
import {
  MatInputModule
} from '@angular/material/input';
import {
  MatIconModule
} from '@angular/material/icon';

@Component({
  selector: 'app-text-field-icon',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './text-field-icon.component.html',
  styleUrl: './text-field-icon.component.scss'
})
export class TextFieldIconComponent {

  @Output() valueChange = new EventEmitter<string>();

  text = '';

  onInputChange() {
    this.valueChange.emit(this.text);
  }
}
