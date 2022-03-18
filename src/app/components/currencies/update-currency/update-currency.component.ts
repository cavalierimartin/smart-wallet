import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Currency } from 'src/app/models/currency';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-update-currency',
  templateUrl: './update-currency.component.html',
  styleUrls: ['./update-currency.component.scss'],
})
export class UpdateCurrencyComponent implements OnInit {
  constructor(
    private currencyService: CurrencyService,
    public formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute
  ) {}

  updateCurrencyForm: FormGroup = this.formBuilder.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    // icon: [], // Future feature
    shortName: ['', Validators.required],
    symbol: [''],
    description: [''],
  });
  currency = {} as Currency;

  ngOnInit() {
    this.getCurrency(this.route.snapshot.paramMap.get('id'));
  }

  getCurrency(id: string | null) {
    if (id)
      this.currencyService.getCurrencyById(id).subscribe((currency) => {
        console.log(currency);
        this.updateCurrencyForm.setValue(currency);
      });
    console.log('No se recibió el id');
  }

  updateCurrency() {
    if (this.updateCurrencyForm?.valid) {
      console.log(this.updateCurrencyForm.value);
      this.currencyService
        .updateCurrency(this.updateCurrencyForm.value)
        .subscribe((value) => {
          // #TODO: Checkear si es éxito o fallo, y mostrar el mensaje que corresponda
          alert('Moneda guardado con éxito!');
        });
      this.currency = {} as Currency;
    }
  }
}
