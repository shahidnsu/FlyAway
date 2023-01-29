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

  constructor(private httpClient :HttpClient) { }

  signUp(user: User) {
    this.httpClient.post<User>(`${this.authUrl}/signup`, user).subscribe(response=>{
      console.log(response);
    })
  }

  login(credential: Login) {
    this.httpClient.post<Login>(`${this.authUrl}/signin`,credential).subscribe(response=>{
      console.log(response);
    })
  }


}
