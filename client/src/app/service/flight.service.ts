import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FlightOption } from '../interfaces/flightOption';

@Injectable({
  providedIn: 'root'
})


export class FlightService {

  constructor() { }

  flightsData: FlightOption[] = []
  // flightsData = new Subject<FlightOption[]>();

  getSearchedFlights() {
    return this.flightsData;
  }

  setSearchedFlights(flights: FlightOption[]) {
    this.flightsData = flights;
  }

}