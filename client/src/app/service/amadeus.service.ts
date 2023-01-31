import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Airport } from '../interfaces/airport';
@Injectable({
  providedIn: 'root',
})
export class AmadeusService {
  constructor(private apiClient: HttpClient) { }

  apiUrl = 'http://localhost:3000';

  airportSearch(city: string) {
    return this.apiClient.get<Airport>(`${this.apiUrl}/airports/${city}`);
  }
}
