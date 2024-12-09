import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ChatComponent } from './pages/chat/chat.component';
import { authGuard } from './guards/auth.guard';
import { HistoryComponent } from './pages/history/history.component';

export const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: ChatComponent,
    canActivate: [authGuard]
  },
  {
    path: 'history',
    component: HistoryComponent,
    canActivate: [authGuard]
  }
];
