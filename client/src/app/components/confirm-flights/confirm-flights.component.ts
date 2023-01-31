import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-confirm-flights',
  templateUrl: './confirm-flights.component.html',
  styleUrls: ['./confirm-flights.component.css']
})
export class ConfirmFlightsComponent {
 @Input() confirmFlightDetails: any;
}
