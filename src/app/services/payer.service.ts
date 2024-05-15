import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PayerService {
  constructor() {}

  getPayerProfile() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      fiscalCode: 'ABCD1234',
      birthDate: new Date('1990-01-01'),
      address: '123 Main St, City, Country',
    };
  }
}
