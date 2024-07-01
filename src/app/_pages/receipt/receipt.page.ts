import { ReceiptService } from './../../_services/receipt.service';
import { Component, OnInit } from '@angular/core';
import { Purchase } from 'src/app/_interfaces/purchase';
import { environment } from 'src/environments/envirorment.development';

/**
 * Represents the ReceiptPage component.
 */
@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.page.html',
  styleUrls: ['./receipt.page.scss'],
})
export class ReceiptPage implements OnInit {
  /**
   * The API URL.
   */
  url: string = environment.apiUrl;

  /**
   * The list of purchases.
   */
  purchases: Purchase[] = [];

  /**
   * The error message.
   */
  errorMessage: string = '';

  constructor(private receiptService: ReceiptService) {}

  /**
   * Initializes the component.
   */
  ngOnInit(): void {
    this.receiptService.getPurchases();
    this.receiptService.currentPurchase$.subscribe((purchases) => {
      if (!purchases) {
        return;
      }

      // Order purchases by date, in descending order
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
