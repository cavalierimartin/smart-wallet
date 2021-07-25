import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transaction } from 'src/app/models/transaction';
import { Wallet } from 'src/app/models/wallet';
import { TransactionService } from 'src/app/services/transaction.service';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss'],
})
export class AddTransactionComponent implements OnInit {
  newTransactionForm: FormGroup | undefined;
  transaction = {} as Transaction;
  wallets: Wallet[] | undefined;

  constructor(
    private transactionService: TransactionService,
    private walletService: WalletService,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getAllWallets();

    this.newTransactionForm = this.formBuilder.group({
      name: ['', Validators.required],
      walletId: ['', Validators.required],
      description: [''],
      date: [Date()],
      time: [Date()],
      amount: ['', Validators.required],
    });
  }

  getAllWallets() {
    this.walletService.getWallets().subscribe((wallets) => {
      this.wallets = wallets;
    });
  }

  addTransaction() {
    if (this.newTransactionForm?.valid) {
      console.log(this.newTransactionForm.value);
      this.transactionService.createTransaction(this.newTransactionForm.value);
      this.transaction = {} as Transaction;
    }
  }
}
