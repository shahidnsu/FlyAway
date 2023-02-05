import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from 'src/app/interfaces/trip';
import { ApiClientService } from 'src/app/service/api-client.service';
import { TripService } from 'src/app/service/trip.service';

@Component({
  selector: 'app-trip-history',
  templateUrl: './trip-history.component.html',
  styleUrls: ['./trip-history.component.css']
})
export class TripHistoryComponent {
  selectedTrips: Trip[]=[]
  totalPrice = this.flightService.getTotalPriceOfSelectedFlights();


  isCompleted = true;
  isLinear = true;
  confirm = true;

  constructor(private route: Router, private flightService: ApiClientService, private tripService:  TripService) { }

  ngOnInit() {
    this.getFlightHistory();
    console.log('mounting and calling');
    console.log(this.selectedTrips)
  }

  getFlightHistory(){
    this.flightService.getTripList().subscribe((res)=> {
      this.selectedTrips=res;
      console.log(this.selectedTrips);
    }
    );
  }

  handleClick (trip: Trip) {
    console.log(trip);
    this.tripService.setTrip(trip);
    this.route.navigate(['trip']);
  }
}
