import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  rootUrl = "http://localhost:3000"
  token = this.auth.getToken();

  constructor(private httpClient : HttpClient,private auth:AuthService) { }

  getProfile() : Observable<User> {
    // console.log(this.token)
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${this.token}`
      }
    };
    return this.httpClient.get<User>(`${this.rootUrl}/profile`,httpOptions)
  } 
}
