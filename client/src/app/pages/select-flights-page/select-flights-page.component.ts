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

  
  // searchResults = [
  //   [
  //     {
  //       segments: [
  //         {
  //           departure: {
  //             iataCode: 'DAC',
  //             at: '2023-03-04T13:00:00',
  //           },
  //           arrival: {
  //             iataCode: 'CMB',
  //             at: '2023-03-04T15:55:00',
  //           },
  //         },
  //         {
  //           departure: {
  //             iataCode: 'CMB',
  //             at: '2023-03-04T18:15:00',
  //           },
  //           arrival: {
  //             iataCode: 'RUH',
  //             at: '2023-03-04T21:30:00',
  //           },
  //         },
  //       ],
  //       price: "436.67",
  //     },
  //     {
  //       segments: [
  //         {
  //           departure: {
  //             iataCode: 'DAC',
  //             at: '2023-03-04T13:00:00',
  //           },
  //           arrival: {
  //             iataCode: 'KWI',
  //             at: '2023-03-04T15:55:00',
  //           },
  //         },
  //         {
  //           departure: {
  //             iataCode: 'KEI',
  //             at: '2023-03-04T18:15:00',
  //           },
  //           arrival: {
  //             iataCode: 'RUH',
  //             at: '2023-03-04T21:30:00',
  //           },
  //         },
  //       ],
  //       price: "136.67",
  //     },
  //   ],
  //   [
  //     {
  //       segments: [
  //         {
  //           departure: {
  //             iataCode: 'RUH',
  //             at: '2023-03-04T13:00:00',
  //           },
  //           arrival: {
  //             iataCode: 'IND',
  //             at: '2023-03-04T15:55:00',
  //           },
  //         },
  //         {
  //           departure: {
  //             iataCode: 'IND',
  //             at: '2023-03-04T18:15:00',
  //           },
  //           arrival: {
  //             iataCode: 'USA',
  //             at: '2023-03-04T21:30:00',
  //           },
  //         },
  //       ],
  //       price: "436.67",
  //     },
  //     {
  //       segments: [
  //         {
  //           departure: {
  //             iataCode: 'RUH',
  //             at: '2023-03-04T13:00:00',
  //           },
  //           arrival: {
  //             iataCode: 'KEI',
  //             at: '2023-03-04T15:55:00',
  //           },
  //         },
  //         {
  //           departure: {
  //             iataCode: 'KEI',
  //             at: '2023-03-04T18:15:00',
  //           },
  //           arrival: {
  //             iataCode: 'USA',
  //             at: '2023-03-04T21:30:00',
  //           },
  //         },
  //       ],
  //       price: "136.67",
  //     },
  //   ],
  // ];

  // selectedFlights = [
  //   {
  //     from: {
  //       time: "5.00PM",
  //       iataCode: "DEL",
  //       airportName:"Indira Gandhi International Airport",
  //     },
  //     to: {
  //       time: "7.30PM",
  //       iataCode: "CCU",
  //       airportName:"Subhash Chandra Bose International Airport",
  //     },
  //     travelDate: "01/31/2023",
  //     carrierCode: "6E",
  //     price: "$230"
  //   },

  //   {
  //     from: {
  //       time: "4.00PM",
  //       iataCode: "DEL",
  //       airportName:"Indira Gandhi International Airport",
  //     },
  //     to: {
  //       time: "6.30PM",
  //       iataCode: "CCU",
  //       airportName:"Subhash Chandra Bose International Airport",
  //     },
  //     travelDate: "MM/DD/YYYY",
  //     carrierCode: "BG",
  //     price: "$230"
  //   },
  //   {
  //     from: {
  //       time: "3.00PM",
  //       iataCode: "DEL",
  //       airportName:"Indira Gandhi International Airport",
  //     },
  //     to: {
  //       time: "5.30PM",
  //       iataCode: "CCU",
  //       airportName:"Subhash Chandra Bose International Airport",
  //     },
  //     travelDate: "MM/DD/YYYY",
  //     carrierCode: "BS",
  //     price: "$230"
  //   }
  // ];

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

  confirm() {
    if(this.selectedFlight.length > 0) {
        this.route.navigate(['confirm-flights']);
    } else {
        this.msg = "Confirm at least one flight for booking!"
    }
  }
}
