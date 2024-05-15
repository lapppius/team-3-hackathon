export interface NavLink {
  title: string;
  path: string;
}

export interface User {
  email: string;
  fiscalCode: string;
  address: string;
}

export interface Payer extends User {
  firstName: string;
  lastName: string;
  birthDate: Date;
}

export interface Shopper extends User {
  shopName: string;
}
