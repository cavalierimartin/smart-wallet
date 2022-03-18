import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencySymbol',
})
export class CurrencySymbolPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    // #TODO: set currencies in store, so it can be dynamic (another option is to do a forkJoin in service)
    // #FIXME: Consider symbols can change depending on language
    // #FIXME: currencySymbol ? currencySymbol: currencyShortName
    let currencySymbol = undefined;
    if (value) {
      switch (value) {
        case 'pesosId':
          currencySymbol = '$';
          break;
        case 'dolaresId':
          currencySymbol = 'U$S';
          break;
        case 'mORPwp-':
          currencySymbol = 'BTC';
          break;
        default:
          currencySymbol = '?';
          break;
      }
    }
    return currencySymbol;
  }
}
