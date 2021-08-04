import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddWalletComponent } from './wallets/add-wallet/add-wallet.component';
import { UpdateWalletComponent } from './wallets/update-wallet/update-wallet.component';
import { ViewWalletsComponent } from './wallets/view-wallets/view-wallets.component';
import { AddTransactionComponent } from './transactions/add-transaction/add-transaction.component';
import { ViewTransactionsComponent } from './transactions/view-transactions/view-transactions.component';
import { UpdateTransactionComponent } from './transactions/update-transaction/update-transaction.component';
import { LoadingComponent } from './common/loading/loading.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    AddWalletComponent,
    UpdateWalletComponent,
    ViewWalletsComponent,
    AddTransactionComponent,
    ViewTransactionsComponent,
    UpdateTransactionComponent,
    LoadingComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
