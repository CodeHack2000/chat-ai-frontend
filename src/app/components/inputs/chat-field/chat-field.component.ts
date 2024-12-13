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
  selector: 'app-chat-field',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './chat-field.component.html',
  styleUrl: './chat-field.component.scss'
})
export class ChatFieldComponent {

  @Output() submit = new EventEmitter<string>();

  text = '';

  onSubmit() {
    if (this.text.length > 0) {
      this.submit.emit(this.text);
      this.text = '';
    }
  }
}
