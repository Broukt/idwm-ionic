import { ReceiptService } from './../../_services/receipt.service';
import { Component, OnInit } from '@angular/core';
import { Purchase } from 'src/app/_interfaces/purchase';
import { environment } from 'src/environments/envirorment.development';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.page.html',
  styleUrls: ['./receipt.page.scss'],
})
export class ReceiptPage implements OnInit {
  url: string = environment.apiUrl;

  purchases: Purchase[] = [];
  errorMessage: string = '';

  constructor(private receiptService: ReceiptService) {}

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
