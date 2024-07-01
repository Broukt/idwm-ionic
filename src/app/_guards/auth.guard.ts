import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { map } from 'rxjs';

/**
 * A guard that checks if the user is authenticated and has the role of 'Usuario'.
 * If the user is not authenticated or has a different role, it redirects to the home page.
 * @param route - The activated route snapshot.
 * @param state - The router state snapshot.
 * @returns A boolean observable indicating whether the user is authenticated and has the role of 'Usuario'.
 */
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
