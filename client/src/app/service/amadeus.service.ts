import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AmadeusService {
  constructor(private apiClient: HttpClient) { }

  apiUrl = 'http://localhost:3000';

  airportSearch(city: string) {
    this.apiClient
      .get(`${this.apiUrl}/airports/${city}`)
      .subscribe((res) => console.log(res));
  }
}
