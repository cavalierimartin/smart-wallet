import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Wallet } from 'src/app/models/wallet';
import { CurrencyService } from 'src/app/services/currency.service';
import { WalletService } from 'src/app/services/wallet.service';
import { Currency } from 'src/app/models/currency';
import { take } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-add-wallet',
  templateUrl: './add-wallet.component.html',
  styleUrls: ['./add-wallet.component.scss'],
})
export class AddWalletComponent implements OnInit {
  // #TODO: Agregar la moneda en la que se está trabajando
  newWalletForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    description: [''],
    balances: [''],
  });
  wallet = {} as Wallet;
  currencies: Observable<Currency[]> | undefined; // #FIXME
  balances: [{ currencyId: string; balance: number }?] = [];

  constructor(
    private walletService: WalletService,
    public formBuilder: FormBuilder,
    private currencyServices: CurrencyService
  ) {}

  ngOnInit() {
    this.getCurrencies();
  }

  addBalanceBlock() {
    this.balances.push({ currencyId: '', balance: 0 });
  }

  getCurrencies() {
    this.currencies = this.currencyServices.getCurrencies();
  }

  addWallet() {
    if (this.newWalletForm?.valid) {
      const filteredBalances = this.balances.filter((balance) => {
        balance?.balance && balance.currencyId;
      });
      this.newWalletForm.patchValue({ balances: filteredBalances });
      console.log(this.newWalletForm.value);
      this.walletService
        .createWallet(this.newWalletForm.value)
        .subscribe((value) => {
          // #TODO: Checkear si es éxito o fallo, y mostrar el mensaje que corresponda
          alert('Billetera creada con éxito!');
        });
      this.wallet = {} as Wallet;
    }
  }
}
