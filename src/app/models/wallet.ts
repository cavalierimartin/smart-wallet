export interface Wallet {
  id: string;
  name: string;
  description: string;
  balances: [balance: number, currencyId: string];
}
