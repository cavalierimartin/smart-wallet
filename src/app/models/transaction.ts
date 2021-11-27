export interface Transaction {
  id: string;
  name: string;
  description: string;
  date: Date;
  time: Date;
  amount: number;
  currencyId: string;
}
