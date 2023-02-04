import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Flight } from 'src/app/interfaces/flight';

@Component({
  selector: 'app-select-flights',
  templateUrl: './select-flights.component.html',
  styleUrls: ['./select-flights.component.css']
})
export class SelectFlightsComponent {
  
  @Input() selected!: boolean;
  @Output() selectFlightEvent = new EventEmitter();  
  // @Input() selectedFlights;
  @Input() flights!: Flight;
  @Input() flightDate!: Date;

  handleClick () {
    this.selectFlightEvent.emit(this.flights);
  }

}
