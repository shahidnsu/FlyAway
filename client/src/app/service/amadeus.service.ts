import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Airport } from '../interfaces/airport';
import { Flight } from '../interfaces/flight';

@Injectable({
  providedIn: 'root',
})
export class AmadeusService {

  constructor(private apiClient: HttpClient) { }

  apiUrl = 'http://localhost:3000';
  month: any = ''
  day: any = ''
  // responseData: any = []
  airportSearch(city: string): Observable<Airport[]> {
    return this.apiClient.get<Airport[]>(`${this.apiUrl}/airports/${city}`);
  }
  
  airportRoute(iataCode: string): Observable<Airport[]> {
    return this.apiClient.get<Airport[]>(`${this.apiUrl}/search-airports-routes/${iataCode}`)
  }
  searchFlight(newLeg: any) : Observable<Flight[]> {

    this.day = new Date(newLeg.date).getDate();
    this.month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    if (this.month < 10) {
      this.month = `0${this.month}`
    }
    if (this.day < 10) {
      this.day = `0${this.day}`
    }
    let date = `${year}-${this.month}-${this.day}`;
    console.log(newLeg);
   return this.apiClient.get<Flight[]>(`${this.apiUrl}/flight-search?originCode=${newLeg.originCode}&destinationCode=${newLeg.destinationCode}&dateOfDeparture=${date}`)
  }
}

