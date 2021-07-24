import { Component, OnInit } from '@angular/core';
import { Wallet } from 'src/app/models/wallet';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-view-wallets',
  templateUrl: './view-wallets.component.html',
  styleUrls: ['./view-wallets.component.scss']
})
export class ViewWalletsComponent implements OnInit {

  walletsList: [Wallet] | any;

  constructor(private walletService: WalletService) { }

  ngOnInit(): void {
    this.walletService.getWallets().subscribe( wallets => {
      this.walletsList = wallets;
    })
  }


}
