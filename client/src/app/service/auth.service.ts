import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';
import { Observable } from 'rxjs';
import { Login } from '../interfaces/Login';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = "http://localhost:3000"

  constructor(private httpClient: HttpClient) { }

  signUp(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.authUrl}/signup`, user)
  }

  login(email: string , password: string ) {
    return this.httpClient.post <Login>(`${this.authUrl}/signin`, { email, password },{observe: 'response'});
  }

  getToken(){
    return localStorage.getItem('token')||'';
  }
  isLoggedIn(){
      return localStorage.getItem('token') != null;
  }
  getUser(){
    return localStorage.getItem('user');
  }
}






