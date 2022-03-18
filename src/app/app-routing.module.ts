import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './common/form/form.component';
import { AddCurrencyComponent } from './components/currencies/add-currency/add-currency.component';
import { UpdateCurrencyComponent } from './components/currencies/update-currency/update-currency.component';
import { ViewCurrenciesComponent } from './components/currencies/view-currencies/view-currencies.component';
import { AddTransactionComponent } from './components/transactions/add-transaction/add-transaction.component';
import { UpdateTransactionComponent } from './components/transactions/update-transaction/update-transaction.component';
import { ViewTransactionsComponent } from './components/transactions/view-transactions/view-transactions.component';
import { AddWalletComponent } from './components/wallets/add-wallet/add-wallet.component';
import { UpdateWalletComponent } from './components/wallets/update-wallet/update-wallet.component';
import { ViewWalletsComponent } from './components/wallets/view-wallets/view-wallets.component';

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
  {
    path: 'monedas',
    children: [
      { path: 'crear', component: AddCurrencyComponent },
      { path: 'actualizar/:id', component: UpdateCurrencyComponent },
      { path: 'lista', component: ViewCurrenciesComponent },
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
