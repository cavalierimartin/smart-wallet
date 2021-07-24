import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddWalletComponent } from './wallets/add-wallet/add-wallet.component';
import { UpdateWalletComponent } from './wallets/update-wallet/update-wallet.component';
import { ViewWalletsComponent } from './wallets/view-wallets/view-wallets.component';
import { AddTransactionComponent } from './transactions/add-transaction/add-transaction.component';
import { ViewTransactionsComponent } from './transactions/view-transactions/view-transactions.component';
import { UpdateTransactionComponent } from './transactions/update-transaction/update-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    AddWalletComponent,
    UpdateWalletComponent,
    ViewWalletsComponent,
    AddTransactionComponent,
    ViewTransactionsComponent,
    UpdateTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
