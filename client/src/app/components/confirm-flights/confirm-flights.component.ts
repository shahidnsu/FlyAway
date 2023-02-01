import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Flight } from 'src/app/interfaces/flight';

@Component({
  selector: 'app-confirm-flights',
  templateUrl: './confirm-flights.component.html',
  styleUrls: ['./confirm-flights.component.css']
})
export class ConfirmFlightsComponent {

  @Input() flights: any;

  @Input() selected!: boolean;
  @Output() selectFlightEvent = new EventEmitter();


  handleClick () {
    this.selectFlightEvent.emit(this.flights);
  }
}