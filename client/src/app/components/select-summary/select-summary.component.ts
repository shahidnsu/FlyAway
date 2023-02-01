import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-summary',
  templateUrl: './select-summary.component.html',
  styleUrls: ['./select-summary.component.css']
})
export class SelectSummaryComponent {
 @Input() selectedFlights: any;
}
