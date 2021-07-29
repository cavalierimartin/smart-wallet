import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Transaction } from 'src/app/models/transaction';
import { Wallet } from 'src/app/models/wallet';
import { TransactionService } from 'src/app/services/transaction.service';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-update-transaction',
  templateUrl: './update-transaction.component.html',
  styleUrls: ['./update-transaction.component.scss'],
})
export class UpdateTransactionComponent implements OnInit {
  updateTransactionForm: FormGroup = this.formBuilder.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    walletId: ['', Validators.required],
    description: [''],
    date: [Date()],
    time: [Date()],
    amount: ['', Validators.required],
  });
  transaction = {} as Transaction;
  wallets: Wallet[] = [];

  constructor(
    private transactionService: TransactionService,
    private walletService: WalletService,
    public formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getTransaction(this.route.snapshot.paramMap.get('id'));
    this.getAllWallets();
  }

  getTransaction(id: string | null) {
    if (id) this.transactionService.getTransactionById(id).subscribe( transaction => {
      console.log(transaction);
      this.updateTransactionForm.setValue(transaction)
    });
    console.log("No se recibió el id");

  }

  getAllWallets() {
    this.walletService.getWallets().subscribe((wallets) => {
      this.wallets = wallets;
    });
  }

  updateTransaction() {
    if (this.updateTransactionForm?.valid) {
      console.log(this.updateTransactionForm.value);
      this.transactionService
        .updateTransaction(this.updateTransactionForm.value)
        .subscribe((value) => {
          // #TODO: Checkear si es éxito o fallo, y mostrar el mensaje que corresponda
          alert('Movimiento guardado con éxito!');
        });
      this.transaction = {} as Transaction;
    }
  }
}
