import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/envirorment.development';
import { Auth } from '../_interfaces/auth';
import { HttpClient } from '@angular/common/http';

/**
 * Service responsible for handling authentication-related functionality.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = environment.apiUrl;
  private currentAuthSource = new BehaviorSubject<Auth | null>(null);
  currentAuth$ = this.currentAuthSource.asObservable();

  constructor(private http: HttpClient) {}

  /**
   * Logs in the user with the provided credentials.
   * @param model - The login credentials.
   * @returns An Observable that emits the authenticated user.
   */
  login(model: any) {
    return this.http.post<Auth>(`${this.baseUrl}/auth/login`, model).pipe(
      map((auth: Auth) => {
        if (auth) {
          if (auth.user.role.type == 'Admin') {
            throw new Error('No tienes permisos para acceder a esta página');
          }

          this.setCurrentAuth(auth);
        }
      })
    );
  }

  /**
   * Logs out the currently authenticated user.
   */
  logout() {
    localStorage.removeItem('auth');
    this.currentAuthSource.next(null);
  }

  /**
   * Sets the current authenticated user.
   * @param auth - The authenticated user.
   */
  setCurrentAuth(auth: Auth) {
    localStorage.setItem('auth', JSON.stringify(auth));
    this.currentAuthSource.next(auth);
  }
}
