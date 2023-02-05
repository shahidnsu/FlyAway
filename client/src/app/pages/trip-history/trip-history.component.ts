import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientService } from 'src/app/service/api-client.service';

@Component({
  selector: 'app-trip-history',
  templateUrl: './trip-history.component.html',
  styleUrls: ['./trip-history.component.css']
})
export class TripHistoryComponent {
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
  }
}
