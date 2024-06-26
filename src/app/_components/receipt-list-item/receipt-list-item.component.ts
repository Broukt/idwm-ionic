import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-receipt-list-item',
  templateUrl: './receipt-list-item.component.html',
  styleUrls: ['./receipt-list-item.component.scss'],
})
export class ReceiptListItemComponent implements OnInit {
  @Input() productName!: string;
  @Input() productType!: string;
  @Input() purchaseDate!: Date;
  @Input() unitPrice!: number;
  @Input() amountBought!: number;
  @Input() totalPrice!: number;

  constructor() {}

  ngOnInit() {}
}
