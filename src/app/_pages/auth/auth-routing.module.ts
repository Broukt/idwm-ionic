import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPage,
  },
];

/**
 * The routing module for the AuthPage.
 * This module is responsible for importing and exporting the RouterModule
 * and configuring the routes for the AuthPage.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
