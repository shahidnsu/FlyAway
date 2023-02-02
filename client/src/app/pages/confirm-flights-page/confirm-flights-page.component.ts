import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/interfaces/flight';

@Component({
  selector: 'app-confirm-flights-page',
  templateUrl: './confirm-flights-page.component.html',
  styleUrls: ['./confirm-flights-page.component.css'],
})
export class ConfirmFlightsPageComponent {
  confirmedFlight: Flight[] = [];

  selectedFlights = [
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
  ,
    
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
    ];


  isCompleted=true;
  isLinear = true;

  constructor(private route: Router) {}

  confirm() {
    this.route.navigate(['payment']);
  }
}
