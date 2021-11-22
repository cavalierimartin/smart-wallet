import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './common/form/form.component';
import { AddTransactionComponent } from './transactions/add-transaction/add-transaction.component';
import { UpdateTransactionComponent } from './transactions/update-transaction/update-transaction.component';
import { ViewTransactionsComponent } from './transactions/view-transactions/view-transactions.component';
import { AddWalletComponent } from './wallets/add-wallet/add-wallet.component';
import { UpdateWalletComponent } from './wallets/update-wallet/update-wallet.component';
import { ViewWalletsComponent } from './wallets/view-wallets/view-wallets.component';

const routes: Routes = [
  {
    path: 'movimientos',
    children: [
      { path: 'crear', component: AddTransactionComponent },
      { path: 'actualizar/:id', component: UpdateTransactionComponent },
      { path: 'lista', component: ViewTransactionsComponent },
      { path: '', pathMatch: 'full', redirectTo: 'lista' },
    ],
  },
  {
    path: 'a',
    component: FormComponent,
  },
  {
    path: 'billeteras',
    children: [
      { path: 'crear', component: AddWalletComponent },
      { path: 'actualizar/:id', component: UpdateWalletComponent },
      { path: 'lista', component: ViewWalletsComponent },
      { path: '', pathMatch: 'full', redirectTo: 'lista' },
    ],
  },
  { path: '**', redirectTo: 'movimientos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
