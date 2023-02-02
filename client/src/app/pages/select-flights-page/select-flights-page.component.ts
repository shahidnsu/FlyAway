import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/interfaces/flight';
import { FlightService } from 'src/app/service/flight.service';
import { ApiClientService } from 'src/app/service/api-client.service';
import { FlightOption } from 'src/app/interfaces/flightOption';

@Component({
  selector: 'app-select-flights-page',
  templateUrl: './select-flights-page.component.html',
  styleUrls: ['./select-flights-page.component.css'],
})
export class SelectFlightsPageComponent {
  msg: string = "";
  flights!: Flight[];

  totalPrice: number = 0;

  selectedFlight: Flight[] = [];
  searchResults: FlightOption[] = [];
  
ngOnInit(){
  setTimeout(() => {
    this.searchResults = this._FlightService.getSearchedFlights();
    console.log("Selected Flights: ", this.searchResults);
  }, 5000)
}

  constructor(private route: Router, public _FlightService: FlightService, private flightService: ApiClientService) {}


  handleSelect(flight: Flight) {
    const newFlightList = this.selectedFlight.filter((fl) => {
      if (
        flight.segments[0].departure.iataCode ===
        fl.segments[0].departure.iataCode &&
        flight.segments[flight.segments.length - 1].arrival.iataCode ===
        fl.segments[flight.segments.length - 1].arrival.iataCode
      ) {
        return false;
      } else return true;
    });

    this.selectedFlight = [...newFlightList, flight];
    console.log(this.selectedFlight);
    this.totalPrice += parseFloat(flight.price);
    this.flightService.setSelectedFlights(this.selectedFlight,this.totalPrice);
    console.log(this._FlightService.getSearchedFlights())
  }

  backButton(){
    this.route.navigate(['/search-flights']);
  }

  confirm() {
    if(this.selectedFlight.length > 0) {
        this.route.navigate(['confirm-flights']);
    } else {
        this.msg = "Confirm at least one flight for booking!"
    }
  }
}
