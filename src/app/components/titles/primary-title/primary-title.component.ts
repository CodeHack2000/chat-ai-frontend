import { Component, input } from '@angular/core';

@Component({
  selector: 'app-primary-title',
  imports: [],
  templateUrl: './primary-title.component.html',
  styleUrl: './primary-title.component.scss'
})
export class PrimaryTitleComponent {

  text = input('');
}
