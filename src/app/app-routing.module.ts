import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './_guards/auth.guard';

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
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
