import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Airport } from '../interfaces/airport';
@Injectable({
  providedIn: 'root',
})
export class AmadeusService {
  constructor(private apiClient: HttpClient) { }

  apiUrl = 'http://localhost:3000';

  airportSearch(city: string):Observable<Airport[]> {
    return this.apiClient.get<Airport[]>(`${this.apiUrl}/airports/${city}`);
  }
  airportRoute(iataCode:string):Observable<Airport[]>{
    return this.apiClient.get<Airport[]>(`${this.apiUrl}/search-airports-routes/${iataCode}`)
  }
}

