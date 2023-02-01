import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/interfaces/flight';

@Component({
  selector: 'app-confirm-flights-page',
  templateUrl: './confirm-flights-page.component.html',
  styleUrls: ['./confirm-flights-page.component.css']
})
export class ConfirmFlightsPageComponent {
  
  confirmedFlight: Flight[] = [];

  selectedFlights = [
    [
      {
        segments: [
            {
                departure: {
                    iataCode: "DAC",
                    at: "2023-03-04T13:00:00"
                },
                arrival: {
                    iataCode: "KWI",
                    at: "2023-03-04T15:55:00"
              }
            },
            {
                departure: {
                    iataCode: "KEI",
                    at: "2023-03-04T18:15:00"
                },
                arrival: {
                    iataCode: "RUH",
                    at: "2023-03-04T21:30:00"
                }
            }
        ],
        price: 136.67
      }    
  ],
    [
          {
            segments: [
                {
                    departure: {
                        iataCode: "RUH",
                        at: "2023-03-04T13:00:00"
                    },
                    arrival: {
                        iataCode: "KEI",
                        at: "2023-03-04T15:55:00"
                    }
                },
                {
                    departure: {
                        iataCode: "KEI",
                        at: "2023-03-04T18:15:00"
                    },
                    arrival: {
                        iataCode: "USA",
                        at: "2023-03-04T21:30:00"
                    }
                }
            ],
            price: 136.67
          } 
    ]];

  // confirmFlights = [
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
  //     duration: "09:30",
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
  //     duration: "09:30",
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
  //     duration: "09:30",
  //     price: "$230"
  //   }
  // ];

  completed=true;

  constructor(private route: Router) {}


  handleSelect (flight: Flight) {

    // const newFlightList = this.confirmedFlight.filter(fl => {
    //     if(flight.segments[0].departure.iataCode === fl.segments[0].departure.iataCode
    //         && flight.segments[flight.segments.length - 1].arrival.iataCode === fl.segments[flight.segments.length - 1].arrival.iataCode) {
    //             return false;
    //         } else return true
    // })

    this.confirmedFlight.push(flight);
  }


  confirm() {
    this.route.navigate(['payment']);
  }
}
