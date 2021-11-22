import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/services/transaction.service';
import {
  faTrashAlt,
  faEdit,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.scss'],
})
export class ViewTransactionsComponent implements OnInit {
  transactionsList: [Transaction] | any;
  columnsToDisplay = [
    'id',
    'name',
    'amount',
    'date',
    'time',
    'description',
    'actions',
  ];
  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe((transactions) => {
      this.transactionsList = transactions;
    });
  }

  deleteTransaction(id: string) {
    this.transactionService.deleteTransactionById(id).subscribe((response) => {
      //#todo: updatear la vista; Se está manteniendo el movimiento borrado;
      console.log(response);
      alert(response);
    });
  }
}
