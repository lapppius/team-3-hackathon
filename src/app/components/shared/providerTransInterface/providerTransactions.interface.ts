export interface ITransactionProv {
    transactionId?: string | undefined;
    date: Date | undefined;
    shopName: string | undefined;
    payerName: string | undefined;
    amount: number | undefined;
  }