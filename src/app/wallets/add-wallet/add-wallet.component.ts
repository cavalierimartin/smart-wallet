import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Wallet } from 'src/app/models/wallet';
import { WalletService } from 'src/app/services/wallet.service';

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
    balance: ['', Validators.required],
  });
  wallet = {} as Wallet;

  constructor(
    private walletService: WalletService,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {}

  addWallet() {
    if (this.newWalletForm?.valid) {
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
