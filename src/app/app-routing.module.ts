import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './_guards/auth.guard';

/**
 * Defines the routes for the application.
 */
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./_pages/auth/auth.module').then((m) => m.AuthPageModule),
  },
  {
    path: 'receipt',
    loadChildren: () =>
      import('./_pages/receipt/receipt.module').then(
        (m) => m.ReceiptPageModule
      ),
    canActivate: [authGuard],
  },
];

/**
 * The AppRoutingModule is responsible for configuring the routing in the application.
 * It imports the RouterModule and sets up the routes using the RouterModule.forRoot() method.
 * The preloadingStrategy option is set to PreloadAllModules to enable preloading of all lazy-loaded modules.
 * Finally, the AppRoutingModule is exported to make it available for other modules to import.
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
