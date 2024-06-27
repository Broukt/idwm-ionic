import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/envirorment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Purchase } from '../_interfaces/purchase';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ReceiptService {
  baseUrl: string = environment.apiUrl;
  private currentPurchaseSource = new BehaviorSubject<Purchase[] | null>(null);
  currentPurchase$ = this.currentPurchaseSource.asObservable();

  constructor(private http: HttpClient, private authService: AuthService) {}

  getPurchases() {
    let sub = this.authService.currentAuth$.subscribe((auth) => {
      if (!auth) {
        //go back to previous screen
        return;
      }
      let headers = new HttpHeaders().set(
        'Authorization',
        `Bearer ${auth.token}`
      );
      let id = auth.user.id;

      this.http
        .get<Purchase[]>(`${this.baseUrl}/user/${id}/purchases`, { headers })
        .subscribe((purchases) => {
          if (purchases) {
            this.currentPurchaseSource.next(purchases);
          }
        });
    });

    sub.unsubscribe();
  }
}
