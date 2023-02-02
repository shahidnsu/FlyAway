import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/interfaces/flight';

@Component({
  selector: 'app-confirm-flights-page',
  templateUrl: './confirm-flights-page.component.html',
  styleUrls: ['./confirm-flights-page.component.css'],
})
export class ConfirmFlightsPageComponent {
  @Input() selectedFlight: Flight[] = [];

  confirmFlights = [
    {
      from: {
        time: '5.00PM',
        iataCode: 'DEL',
        airportName: 'Indira Gandhi International Airport',
      },
      to: {
        time: '7.30PM',
        iataCode: 'CCU',
        airportName: 'Subhash Chandra Bose International Airport',
      },
      travelDate: '01/31/2023',
      duration: '09:30',
      price: '$230',
    },

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

  completed = true;

  constructor(private route: Router) { }

  confirm() {
    this.route.navigate(['payment']);
  }
}
