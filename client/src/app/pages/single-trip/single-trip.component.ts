import { Component } from '@angular/core';
import { TripService } from 'src/app/service/trip.service';

@Component({
  selector: 'app-single-trip',
  templateUrl: './single-trip.component.html',
  styleUrls: ['./single-trip.component.css']
})
export class SingleTripComponent {
  trip: any;

  constructor(private tripService: TripService) {}
 
  ngOnInit() {
    this.trip = this.tripService.getTrip()
  }
}
