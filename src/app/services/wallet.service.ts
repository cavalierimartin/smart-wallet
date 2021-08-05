import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { retry, catchError } from 'rxjs/operators';
import { Wallet } from '../models/wallet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  constructor(private http: HttpClient, private commonService: CommonService) {}

  createWallet(wallet: Wallet): Observable<Wallet> {
    return this.http
      .post<Wallet>(
        this.commonService.apiURL + '/wallets',
        JSON.stringify(wallet),
        this.commonService.httpOptions
      )
      .pipe(retry(1), catchError(this.commonService.handleError));
  }
  getWalletById(id: string): Observable<Wallet> {
    return this.http
      .get<Wallet>(this.commonService.apiURL + '/wallets/' + id)
      .pipe(retry(1), catchError(this.commonService.handleError));
  }
  getWallets() {
    return this.http
      .get<Wallet[]>(this.commonService.apiURL + '/wallets')
      .pipe(retry(1), catchError(this.commonService.handleError));
  }
  updateWallet(wallet: Wallet) {
    return this.http
      .put<Wallet>(
        this.commonService.apiURL + '/wallets/' + wallet.id,
        JSON.stringify(wallet),
        this.commonService.httpOptions
      )
      .pipe(retry(1), catchError(this.commonService.handleError));
  }
  deleteWalletById(id: string) {
    return this.http
      .delete<Wallet>(
        this.commonService.apiURL + '/wallets/' + id,
        this.commonService.httpOptions
      )
      .pipe(retry(1), catchError(this.commonService.handleError));
  }
}
