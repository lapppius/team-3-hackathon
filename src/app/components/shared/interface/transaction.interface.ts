export interface ITransaction {
    transactionId?: string | undefined;
    date: Date | undefined;
    sourceName: string | undefined;
    amount: number | undefined;
    fee: number | undefined;
  }

  