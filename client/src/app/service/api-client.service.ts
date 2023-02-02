import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../interfaces/flight';
import { User } from '../interfaces/User';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  rootUrl = "http://localhost:3000"
  token = this.auth.getToken();
  selectedFlights: Flight[] = [];

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

  updateProfile(firstName: string, lastName: string, email: string, passport: string, dob:string,country:string,phoneNumber:string) : Observable<User> {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${this.token}`
      }
    };
    return this.httpClient.put<User>(`${this.rootUrl}/profile`, {firstName,lastName,email,passport,dob,country,phoneNumber} ,httpOptions)
  }

  setSelectedFlights(selectedFlights: Flight[]) {
    this.selectedFlights = selectedFlights.map((flight) => flight);
    return this.selectedFlights;
  }
  
  getSelectedFlights() {
    return this.selectedFlights;
  }
}
