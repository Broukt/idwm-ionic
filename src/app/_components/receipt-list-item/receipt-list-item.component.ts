import { Component, OnInit, Input } from '@angular/core';

/**
 * Represents a component for displaying a single receipt item in a list.
 */
@Component({
  selector: 'app-receipt-list-item',
  templateUrl: './receipt-list-item.component.html',
  styleUrls: ['./receipt-list-item.component.scss'],
})
export class ReceiptListItemComponent implements OnInit {
  /**
   * The name of the product.
   */
  @Input() productName!: string;

  /**
   * The type of the product.
   */
  @Input() productType!: string;

  /**
   * The purchase date of the product.
   */
  @Input() purchaseDate!: Date;

  /**
   * The unit price of the product.
   */
  @Input() unitPrice!: number;

  /**
   * The amount bought of the product.
   */
  @Input() amountBought!: number;

  /**
   * The total price of the product.
   */
  @Input() totalPrice!: number;

  constructor() {}

  ngOnInit() {}
}
