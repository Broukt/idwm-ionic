import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.currentAuth$.pipe(
    map((auth) => {
      if (auth && auth.user.role.type === 'Usuario') {
        return true;
      }
      router.navigate(['/']);
      return false;
    })
  );
};
