import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
// import {
//   ViewWalletsDataSource,
//   ViewWalletsItem,
// } from './view-wallets-datasource';
import { Wallet } from 'src/app/models/wallet';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-view-wallets',
  templateUrl: './view-wallets.component.html',
  styleUrls: ['./view-wallets.component.scss'],
})
export class ViewWalletsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Wallet>;
  // dataSource: ViewWalletsDataSource;

  walletsList: [Wallet] | any;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  columnsToDisplay = ['id', 'name', 'balance', 'description', 'actions'];

  constructor(private walletService: WalletService) {
    // this.dataSource = new ViewWalletsDataSource();
  }

  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;
    this.walletService.getWallets().subscribe((wallets) => {
      this.walletsList = wallets;
    });
  }

  deleteWallet(id: string) {
    this.walletService.deleteWalletById(id).subscribe((response) => {
      //#todo: updatear la vista; Se está manteniendo el movimiento borrado;
      console.log(response);
      alert(response);
    });
  }
}
