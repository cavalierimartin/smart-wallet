import { Component, OnInit } from '@angular/core';
import { faEdit, faSearch, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Wallet } from 'src/app/models/wallet';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-view-wallets',
  templateUrl: './view-wallets.component.html',
  styleUrls: ['./view-wallets.component.scss']
})
export class ViewWalletsComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;
  faSearch = faSearch;

  walletsList: [Wallet] | any;

  constructor(private walletService: WalletService) { }

  ngOnInit(): void {
    this.walletService.getWallets().subscribe( wallets => {
      this.walletsList = wallets;
    })
  }

  deleteWallet(id: string) {
    this.walletService.deleteWalletById(id).subscribe((response) => {
      //#todo: updatear la vista; Se está manteniendo el movimiento borrado;
      console.log(response);
      alert(response);
    });
  }


}
