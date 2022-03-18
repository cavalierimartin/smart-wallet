import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Currency } from 'src/app/models/currency';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-add-currency',
  templateUrl: './add-currency.component.html',
  styleUrls: ['./add-currency.component.scss'],
})
export class AddCurrencyComponent implements OnInit {
  newCurrencyForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    // icon: [], // Future feature
    shortName: ['', Validators.required],
    symbol: [''],
    description: [''],
  });
  currency = {} as Currency;

  constructor(
    private currencyService: CurrencyService,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {}

  addCurrency() {
    if (this.newCurrencyForm?.valid) {
      console.log(this.newCurrencyForm.value);
      this.currencyService
        .createCurrency(this.newCurrencyForm.value)
        .subscribe((value) => {
          // #TODO: Checkear si es éxito o fallo, y mostrar el mensaje que corresponda
          alert('Moneda creada con éxito!');
        });
      this.currency = {} as Currency;
    }
  }
}
