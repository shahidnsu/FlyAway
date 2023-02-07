import { Injectable } from '@angular/core';
import { Trip } from '../interfaces/trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  selectedTrip: Trip | undefined;

  constructor() { }

  setTrip(selectedTrip: Trip) {
    this.selectedTrip = selectedTrip;
  }

  getTrip() {
    return this.selectedTrip;
  }
}
