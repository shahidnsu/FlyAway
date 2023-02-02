import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/interfaces/flight';
import { ApiClientService } from 'src/app/service/api-client.service';

@Component({
  selector: 'app-confirm-flights-page',
  templateUrl: './confirm-flights-page.component.html',
  styleUrls: ['./confirm-flights-page.component.css'],
})
export class ConfirmFlightsPageComponent {
   selectedFlights = this.flightService.getSelectedFlights();

   confirmedFlight = [
  //     {
  //       segments: [
  //           {
  //               departure: {
  //                   iataCode: "DAC",
  //                   at: "2023-03-04T13:00:00"
  //               },
  //               arrival: {
  //                   iataCode: "KWI",
  //                   at: "2023-03-04T15:55:00"
  //             }
  //           },
  //           {
  //               departure: {
  //                   iataCode: "KEI",
  //                   at: "2023-03-04T18:15:00"
  //               },
  //               arrival: {
  //                   iataCode: "RUH",
  //                   at: "2023-03-04T21:30:00"
  //               }
  //           }
  //       ],
  //       price: 136.67
  //     }    
  // ,
    
  //         {
  //           segments: [
  //               {
  //                   departure: {
  //                       iataCode: "RUH",
  //                       at: "2023-03-04T13:00:00"
  //                   },
  //                   arrival: {
  //                       iataCode: "KEI",
  //                       at: "2023-03-04T15:55:00"
  //                   }
  //               },
  //               {
  //                   departure: {
  //                       iataCode: "KEI",
  //                       at: "2023-03-04T18:15:00"
  //                   },
  //                   arrival: {
  //                       iataCode: "USA",
  //                       at: "2023-03-04T21:30:00"
  //                   }
  //               }
  //           ],
  //           price: 136.67
  //         } 
  //   ];

    {
      from: {
        time: '4.00PM',
        iataCode: 'DEL',
        airportName: 'Indira Gandhi International Airport',
      },
      to: {
        time: '6.30PM',
        iataCode: 'CCU',
        airportName: 'Subhash Chandra Bose International Airport',
      },
      travelDate: 'MM/DD/YYYY',
      duration: '09:30',
      price: '$230',
    },
    {
      from: {
        time: '3.00PM',
        iataCode: 'DEL',
        airportName: 'Indira Gandhi International Airport',
      },
      to: {
        time: '5.30PM',
        iataCode: 'CCU',
        airportName: 'Subhash Chandra Bose International Airport',
      },
      travelDate: 'MM/DD/YYYY',
      duration: '09:30',
      price: '$230',
    },
  ];

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

  isCompleted=true;
  isLinear = true;

  constructor(private route: Router, private flightService: ApiClientService) {}


  // handleConfirm (flight: Flight) {
  //   this.confirmedFlight.push(flight);
  //   console.log(this.confirmedFlight);
  // }

  //constructor(private route: Router) { }

  confirm() {
    this.route.navigate(['payment']);
  }
}
