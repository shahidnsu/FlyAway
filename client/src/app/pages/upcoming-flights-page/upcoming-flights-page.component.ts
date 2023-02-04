import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientService } from 'src/app/service/api-client.service';

@Component({
  selector: 'app-upcoming-flights-page',
  templateUrl: './upcoming-flights-page.component.html',
  styleUrls: ['./upcoming-flights-page.component.css']
})
export class UpcomingFlightsPageComponent {
  selectedFlights = this.flightService.getSelectedFlights();
  totalPrice = this.flightService.getTotalPriceOfSelectedFlights();

  isCompleted=true;
  isLinear = true;
  confirm = true;


  constructor(private route: Router, private flightService: ApiClientService) {}
  
  ngOnInit() {
    this.selectedFlights = this.flightService.getSelectedFlights();
    console.log('Selected flights service: ', this.selectedFlights);
  }
}
