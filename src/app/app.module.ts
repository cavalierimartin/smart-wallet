import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddWalletComponent } from './components/wallets/add-wallet/add-wallet.component';
import { UpdateWalletComponent } from './components/wallets/update-wallet/update-wallet.component';
import { ViewWalletsComponent } from './components/wallets/view-wallets/view-wallets.component';
import { AddTransactionComponent } from './components/transactions/add-transaction/add-transaction.component';
import { ViewTransactionsComponent } from './components/transactions/view-transactions/view-transactions.component';
import { UpdateTransactionComponent } from './components/transactions/update-transaction/update-transaction.component';
import { LoadingComponent } from './common/loading/loading.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NavigationComponent } from './common/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormComponent } from './common/form/form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { AddCurrencyComponent } from './components/currencies/add-currency/add-currency.component';
import { ViewCurrenciesComponent } from './components/currencies/view-currencies/view-currencies.component';
import { UpdateCurrencyComponent } from './components/currencies/update-currency/update-currency.component';
import { CurrencySymbolPipe } from './pipes/currency-symbol.pipe';

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
    NavigationComponent,
    FormComponent,
    AddCurrencyComponent,
    ViewCurrenciesComponent,
    UpdateCurrencyComponent,
    CurrencySymbolPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
