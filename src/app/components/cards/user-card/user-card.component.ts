import { Component, inject, OnInit, signal } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-user-card',
  imports: [
    MatCardModule
  ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit {

  authService = inject(AuthService);

  username = signal('');
  avatarUrl = signal('');

  ngOnInit(): void {
    const user = this.authService.getUser();
    this.username.set(user!.username);
    if (user?.avatar) {
      this.avatarUrl.set(`data:image/jpeg;base64,${user.avatar}`);
    }
  }
}
