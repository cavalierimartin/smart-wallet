import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Wallet } from 'src/app/models/wallet';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-update-wallet',
  templateUrl: './update-wallet.component.html',
  styleUrls: ['./update-wallet.component.scss'],
})
export class UpdateWalletComponent implements OnInit {
  constructor(
    private walletService: WalletService,
    public formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute
  ) {}

  updateWalletForm: FormGroup = this.formBuilder.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    balance: ['', Validators.required],
    description: [''],
  });
  wallet = {} as Wallet;

  ngOnInit() {
    this.getWallet(this.route.snapshot.paramMap.get('id'));
  }

  getWallet(id: string | null) {
    if (id)
      this.walletService.getWalletById(id).subscribe((wallet) => {
        console.log(wallet);
        this.updateWalletForm.setValue(wallet);
      });
    console.log('No se recibió el id');
  }

  updateWallet() {
    if (this.updateWalletForm?.valid) {
      console.log(this.updateWalletForm.value);
      this.walletService
        .updateWallet(this.updateWalletForm.value)
        .subscribe((value) => {
          // #TODO: Checkear si es éxito o fallo, y mostrar el mensaje que corresponda
          alert('Billetera guardado con éxito!');
        });
      this.wallet = {} as Wallet;
    }
  }
}
