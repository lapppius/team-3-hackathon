export interface ITransaction {
  transactionId?: string | undefined;
  date: Date | undefined;
  FromId: string | undefined;
  amount: number | undefined;
  // fee: number | undefined;
}
