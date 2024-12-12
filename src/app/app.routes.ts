import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ChatComponent } from './pages/chat/chat.component';
import { HistoryComponent } from './pages/history/history.component';
import { ConfigComponent } from './pages/config/config.component';
import { UserPlanComponent } from './pages/user-plan/user-plan.component';

import { authVipGuard } from './guards/auth-vip.guard';
import { authGuard } from './guards/auth.guard';

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
    canActivate: [authGuard, authVipGuard]
  },
  {
    path: 'config',
    component: ConfigComponent,
    canActivate: [authGuard]
  },
  {
    path: 'userPlan',
    component: UserPlanComponent,
    canActivate: [authGuard]
  }
];
