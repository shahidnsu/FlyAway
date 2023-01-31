import { Component } from '@angular/core';

@Component({
  selector: 'app-confirm-flights-page',
  templateUrl: './confirm-flights-page.component.html',
  styleUrls: ['./confirm-flights-page.component.css']
})
export class ConfirmFlightsPageComponent {
confirm() {
throw new Error('Method not implemented.');
}
  confirmFlights = [
    {
      from: {
        time: "5.00PM",
        iataCode: "DEL",
        airportName:"Indira Gandhi International Airport",
      },
      to: {
        time: "7.30PM",
        iataCode: "CCU",
        airportName:"Subhash Chandra Bose International Airport",
      },
      travelDate: "01/31/2023",
      duration: "09:30",
      price: "$230"
    },

    {
      from: {
        time: "4.00PM",
        iataCode: "DEL",
        airportName:"Indira Gandhi International Airport",
      },
      to: {
        time: "6.30PM",
        iataCode: "CCU",
        airportName:"Subhash Chandra Bose International Airport",
      },
      travelDate: "MM/DD/YYYY",
      duration: "09:30",
      price: "$230"
    },
    {
      from: {
        time: "3.00PM",
        iataCode: "DEL",
        airportName:"Indira Gandhi International Airport",
      },
      to: {
        time: "5.30PM",
        iataCode: "CCU",
        airportName:"Subhash Chandra Bose International Airport",
      },
      travelDate: "MM/DD/YYYY",
      duration: "09:30",
      price: "$230"
    }
  ];

  completed=true;
}
