import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReceiptListItemComponent } from 'src/app/_components/receipt-list-item/receipt-list-item.component';
import { TabsComponent } from 'src/app/_components/tabs/tabs.component';

import { IonicModule } from '@ionic/angular';

import { ReceiptPageRoutingModule } from './receipt-routing.module';

import { ReceiptPage } from './receipt.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ReceiptPageRoutingModule],
  declarations: [ReceiptPage, ReceiptListItemComponent, TabsComponent],
})
export class ReceiptPageModule {}
