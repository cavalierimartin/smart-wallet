import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Currency } from 'src/app/models/currency';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-view-currencies',
  templateUrl: './view-currencies.component.html',
  styleUrls: ['./view-currencies.component.scss'],
})
export class ViewCurrenciesComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Currency>;
  // dataSource: ViewCurrenciesDataSource;

  currenciesList: [Currency] | any;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  columnsToDisplay = [
    'id',
    'name',
    'shortName',
    'description',
    'symbol',
    'actions',
  ];

  constructor(private currencyService: CurrencyService) {
    // this.dataSource = new ViewCurrenciesDataSource();
  }

  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;
    this.currencyService.getCurrencies().subscribe((currencies) => {
      this.currenciesList = currencies;
    });
  }

  deleteCurrency(id: string) {
    this.currencyService.deleteCurrencyById(id).subscribe((response) => {
      //#todo: updatear la vista; Se está manteniendo el movimiento borrado;
      console.log(response);
      alert(response);
    });
  }
}
