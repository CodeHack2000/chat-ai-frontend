import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { SnackbarService } from '../services/snackbar.service';

export const authVipGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const snackbarService = inject(SnackbarService);
  const router = inject(Router);

  const hasVipProfile = authService.hasUserProfile('VIP').valueOf();
  if (!hasVipProfile) {
    snackbarService.openSnackBar('Acesso reservado aos membros VIP!', 2);
    router.navigate(['/'], { queryParams: { returnUrl: state.url } });
  }

  return hasVipProfile;
};
