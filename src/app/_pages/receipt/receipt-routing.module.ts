import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceiptPage } from './receipt.page';

const routes: Routes = [
  {
    path: '',
    component: ReceiptPage,
  },
];

/**
 * The routing module for the Receipt page.
 * This module is responsible for importing and exporting the necessary routing configuration for the Receipt page.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceiptPageRoutingModule {}
