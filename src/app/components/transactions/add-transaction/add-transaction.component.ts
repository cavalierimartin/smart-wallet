import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Currency } from 'src/app/models/currency';
import { Transaction } from 'src/app/models/transaction';
import { Wallet } from 'src/app/models/wallet';
import { CurrencyService } from 'src/app/services/currency.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss'],
})
export class AddTransactionComponent implements OnInit {
  newTransactionForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    walletId: ['', Validators.required],
    description: [''],
    date: [Date()],
    time: [Date()],
    amount: ['', Validators.required],
  });
  transaction = {} as Transaction;
  wallets: Wallet[] = [];
  currencies$: Observable<Currency[]> | undefined;

  constructor(
    private transactionService: TransactionService,
    private walletService: WalletService,
    public formBuilder: FormBuilder,
    private currencyServices: CurrencyService
  ) {}
    asdf = of(NaN);
  ngOnInit() {
    this.getAllWallets();
  }

  getAllWallets() {
    this.walletService.getWallets().subscribe((wallets) => {
      this.wallets = wallets;
    });
  }

  getCurrencies() {
    this.currencies$ = this.currencyServices.getCurrencies();
  }

  addTransaction() {
    if (this.newTransactionForm?.valid) {
      console.log(this.newTransactionForm.value);
      this.transactionService
        .createTransaction(this.newTransactionForm.value)
        .subscribe((value) => {
          // #TODO: Checkear si es éxito o fallo, y mostrar el mensaje que corresponda
          alert('Movimiento guardado con éxito!');
        });
      this.transaction = {} as Transaction;
    }
  }
}
