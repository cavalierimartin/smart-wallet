import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { retry, catchError } from 'rxjs/operators';
import { Currency } from '../models/currency';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient, private commonService: CommonService) {}

  createCurrency(currency: Currency): Observable<Currency> {
    return this.http
      .post<Currency>(
        this.commonService.apiURL + '/currencies',
        JSON.stringify(currency),
        this.commonService.httpOptions
      )
      .pipe(retry(1), catchError(this.commonService.handleError));
  }
  getCurrencyById(id: string): Observable<Currency> {
    return this.http
      .get<Currency>(this.commonService.apiURL + '/currencies/' + id)
      .pipe(retry(1), catchError(this.commonService.handleError));
  }
  getCurrencies() {
    return this.http
      .get<Currency[]>(this.commonService.apiURL + '/currencies')
      .pipe(retry(1), catchError(this.commonService.handleError));
  }
  updateCurrency(currency: Currency) {
    return this.http
      .put<Currency>(
        this.commonService.apiURL + '/currencies/' + currency.id,
        JSON.stringify(currency),
        this.commonService.httpOptions
      )
      .pipe(retry(1), catchError(this.commonService.handleError));
  }
  deleteCurrencyById(id: string) {
    return this.http
      .delete<Currency>(
        this.commonService.apiURL + '/currencies/' + id,
        this.commonService.httpOptions
      )
      .pipe(retry(1), catchError(this.commonService.handleError));
  }
}
