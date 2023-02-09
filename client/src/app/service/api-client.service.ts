import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../interfaces/flight';
import { Trip } from '../interfaces/trip';
import { User } from '../interfaces/User';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  rootUrl = "http://localhost:3000"
  // token = this.auth.getToken();
  selectedFlights: Flight[] = [];
  totalPrice!: number;

  constructor(private httpClient: HttpClient, private auth: AuthService) { }

  getProfile(): Observable<User> {
    // console.log(this.token)
    // const httpOptions = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `${this.token}`
    //   }
    // };
    return this.httpClient.get<User>(`${this.rootUrl}/profile`)
  }

  updateProfile(firstName: string, lastName: string, email: string, passport: string, dob: string, country: string, phoneNumber: string): Observable<User> {
    // const httpOptions = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `${this.token}`
    //   }
    // };
    return this.httpClient.put<User>(`${this.rootUrl}/profile`, { firstName, lastName, email, passport, dob, country, phoneNumber })
  }

  setSelectedFlights(selectedFlights: Flight[], totalPrice: number) {
    this.selectedFlights = selectedFlights.map((flight) => flight);
    this.totalPrice = totalPrice;
    return this.selectedFlights;
  }

  getSelectedFlights() {
    return this.selectedFlights;
  }
  getTotalPriceOfSelectedFlights() {
    return this.totalPrice;
  }


  createTripList(tripObject: any): Observable<Trip> {
    let user=this.auth.getUser();
    let tripList={
      trip:tripObject,
      user:user
    }

    // const httpOptions = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `${this.token}`
    //   }
    // };
    
    return this.httpClient.post<Trip>(`${this.rootUrl}/tripList`, tripList)
  }

  getTripList(): Observable<Trip[]> {
    // const httpOptions = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `${this.token}`
    //   }
    // };
    return this.httpClient.get<Trip[]>(`${this.rootUrl}/tripList`);
  }
}
