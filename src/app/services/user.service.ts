import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/app-models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserProfile(id: string): Observable<User> {
    return this.http.get<User>(`http://localhost:8080/users/${id}`);
  }

  signUpUser(userData: any): Observable<User> {
    return this.http.post<any>('http://localhost:8080/newuser', userData);
  }

  signInUser(userData: any): Observable<User> {
    return this.http.post<any>('http://localhost:8080/signin', userData);
  }
}
