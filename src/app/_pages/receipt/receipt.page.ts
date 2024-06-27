import { ReceiptService } from './../../_services/receipt.service';
import { AuthService } from 'src/app/_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Purchase } from 'src/app/_interfaces/purchase';
import { User } from 'src/app/_interfaces/user';
import { Auth } from 'src/app/_interfaces/auth';
import { tap, filter, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/envirorment.development';
import { HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.page.html',
  styleUrls: ['./receipt.page.scss'],
})
export class ReceiptPage implements OnInit {
  url: string = environment.apiUrl;

  purchases: Purchase[] = [];
  errorMessage: string = '';

  constructor(
    private receiptService: ReceiptService,
    private authService: AuthService,
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    this.receiptService.getPurchases();
    this.receiptService.currentPurchase$.subscribe((purchases) => {
      if (!purchases) {
        return;
      }

      //order purchases by date, in descending order
      purchases.sort((a, b) => {
        return (
          new Date(b.purchase_Date).getTime() -
          new Date(a.purchase_Date).getTime()
        );
      });

      this.purchases = purchases;
    });
  }
}
