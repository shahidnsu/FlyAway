import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientService } from 'src/app/service/api-client.service';

@Component({
  selector: 'app-upcoming-flights-page',
  templateUrl: './upcoming-flights-page.component.html',
  styleUrls: ['./upcoming-flights-page.component.css']
})
export class UpcomingFlightsPageComponent {
  selectedFlights: any[]=[]
  totalPrice = this.flightService.getTotalPriceOfSelectedFlights();

  isCompleted = true;
  isLinear = true;
  confirm = true;

  constructor(private route: Router, private flightService: ApiClientService) { }

  ngOnInit() {
    this.getFlightHistory();
    console.log('mounting and calling');
  }

  getFlightHistory(){
    this.flightService.getTripList().subscribe((res)=>this.selectedFlights=res);
    console.log('Selected flights service: ', this.selectedFlights);
    console.log(this.selectedFlights)
  }
  
}
