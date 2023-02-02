import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor() { }

  public flightsData = [];


  getSearchedFlights () {
    return this.flightsData;
  }
  
}
