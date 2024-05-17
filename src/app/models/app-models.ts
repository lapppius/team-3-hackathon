import { PrimeIcons } from 'primeng/api';

export interface NavLink {
  title: string;
  path: string;
}

export enum PaymentAccountType {
  PAYPAL,
  BANK,
}

export enum AccountRole {
  ADMIN,
  PAYER,
  SHOPPER,
}

export interface User {
  id: string;
  firstName: string;
  shopName: string | null;
  lastName: string;
  email: string;
  address: string;
  fiscalCode: string;
  birthDate: string;
  weeklyExpensesLimit: number;
  weeklyTransferLimit: number;
  amountSpent: number;
  totalCashback: number;
  paymentAccountId: number | string;
  savings: number;
  paymentAccountType: string;
  role: string;
  valid: boolean;
}

export interface Feature {
  title: string;
  icon: string;
}

export interface ITransaction {
  transactionId?: string | undefined;
  date: Date | undefined;
  sourceName: string | undefined;
  amount: number | undefined;
  fee: number | undefined;
}
