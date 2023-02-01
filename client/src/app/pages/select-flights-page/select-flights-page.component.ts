import { Component } from '@angular/core';

@Component({
  selector: 'app-select-flights-page',
  templateUrl: './select-flights-page.component.html',
  styleUrls: ['./select-flights-page.component.css']
})
export class SelectFlightsPageComponent {

  selectedFlights = [
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
      carrierCode: "6E",
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
      carrierCode: "BG",
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
      carrierCode: "BS",
      price: "$230"
    }
  ];



}
