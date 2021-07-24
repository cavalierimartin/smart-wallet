import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Transaction } from '../models/transaction';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private http: HttpClient, private commonService: CommonService) {}

  createTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http
      .post<Transaction>(
        this.commonService.apiURL + '/transactions',
        JSON.stringify(transaction),
        this.commonService.httpOptions
      )
      .pipe(retry(1), catchError(this.commonService.handleError));
  }
  getTransactionById(id: string): Observable<Transaction> {
    return this.http
      .get<Transaction>(this.commonService.apiURL + '/transactions/' + id)
      .pipe(retry(1), catchError(this.commonService.handleError));
  }
  getTransactions() {
    return this.http
      .get<Transaction[]>(this.commonService.apiURL + '/transaction')
      .pipe(retry(1), catchError(this.commonService.handleError));
  }
  updateTransaction(transaction: Transaction) {
    return this.http
      .put<Transaction>(
        this.commonService.apiURL + '/transactions/' + transaction.id,
        JSON.stringify(transaction),
        this.commonService.httpOptions
      )
      .pipe(retry(1), catchError(this.commonService.handleError));
  }
  deleteTransaction(id: string) {
    return this.http
      .delete<Transaction>(
        this.commonService.apiURL + '/transactions/' + id,
        this.commonService.httpOptions
      )
      .pipe(retry(1), catchError(this.commonService.handleError));
  }
}
