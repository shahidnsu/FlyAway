import { Component, Input } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-date-and-places',
  templateUrl: './select-date-and-places.component.html',
  styleUrls: ['./select-date-and-places.component.css']
})

export class SelectDateAndPlacesComponent {

  @Input()
  addNewLocation!: (args: any) => void;
  travelForm = new FormGroup({
    from: new FormControl(''),
    to: new FormControl(''),
    date: new FormControl('')
  })

  // submitFlight(){
  //   console.log('Flight details submitted')
  // }
}
