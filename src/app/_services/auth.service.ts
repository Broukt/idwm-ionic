import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/envirorment.development';
import { Auth } from '../_interfaces/auth';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = environment.apiUrl;
  private currentAuthSource = new BehaviorSubject<Auth | null>(null);
  currentAuth$ = this.currentAuthSource.asObservable();

  constructor(private http: HttpClient) {
    console.log('AuthService. a ver q onda lol');
  }

  login(model: any) {
    console.log('a ver si esto se va en vola o no lol');
    return this.http.post<Auth>(`${this.baseUrl}/auth/login`, model).pipe(
      map((auth: Auth) => {
        if (auth) {
          if (auth.user.role.type == 'Admin') {
            console.log('es admin');
            throw new Error('No tienes permisos para acceder a esta página');
          }

          this.setCurrentAuth(auth);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('auth');
    this.currentAuthSource.next(null);
  }

  setCurrentAuth(auth: Auth) {
    localStorage.setItem('auth', JSON.stringify(auth));
    this.currentAuthSource.next(auth);
    console.log('una vez wn');
  }
}
