export interface ITransactionProv {
  transactionId?: string | undefined;
  date: Date | undefined;
  toId: string | undefined;
  fromId: string | undefined;
  amount: number | undefined;
}
