import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/interfaces/flight';
import { FlightService } from 'src/app/service/flight.service';
import { ApiClientService } from 'src/app/service/api-client.service';
import { FlightOption } from 'src/app/interfaces/flightOption';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-select-flights-page',
  templateUrl: './select-flights-page.component.html',
  styleUrls: ['./select-flights-page.component.css'],
})
export class SelectFlightsPageComponent {
  msg: string = '';
  isError: boolean = false;

  flights!: Flight[];

  totalPrice: number = 0;

  isLoading: boolean = false;
  selectedFlight: Flight[] = [];
  searchResults: FlightOption[] = [];

  options: AnimationOptions = {
    path: './assets/9932-flight-ticket.json',
  };

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  ngOnInit() {

    this.searchResults = this._FlightService.getSearchedFlights();
  }

  constructor(
    private route: Router,
    public _FlightService: FlightService,
    private flightService: ApiClientService
  ) { }

  handleSelect(flight: Flight) {
    this.isError = false;
    const newFlightList = this.selectedFlight.filter((fl) => {
      if (
        flight.segments[0].departure.iataCode ==
        fl.segments[0].departure.iataCode &&
        flight.segments[flight.segments.length - 1].arrival.iataCode ==
        fl.segments[fl.segments.length - 1].arrival.iataCode
      ) {
        return false;
      } else return true;
    });

    this.selectedFlight = [...newFlightList, flight];
    this.totalPrice = this.selectedFlight.reduce(
      (acc: number, curr: Flight) =>
        (acc * 100 + parseFloat(curr.price) * 100) / 100,
      0
    );
    this.flightService.setSelectedFlights(this.selectedFlight, this.totalPrice);
    console.log(this._FlightService.getSearchedFlights());
  }

  confirm() {
    console.log("confirm flight clicked")
    if (this.selectedFlight.length === this.searchResults.length) {
      this.isError = false;
      this.route.navigate(['/confirm-flights']);
      console.log("confirm flight clicked and went to if block")
    } else {
      console.log("confirm flight clicked but went to else block")
      this.isError = true;
      this.msg = 'Select at least one flight from each option!';
      // setTimeout(()=>{
      //   this.isError = false;
      // },3000)
      
    }
  }
}
