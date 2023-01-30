import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-search-flights-page',
  templateUrl: './search-flights-page.component.html',
  styleUrls: ['./search-flights-page.component.css']
})
export class SearchFlightsPageComponent {

  obj = {
    'FromLocation':'Dhaka',
    'FromAirPort':'Shahjalal Int Airport',
    'ToLocation': 'Dubai',
    'ToAirPort': 'Sarjah Int Airport',
    'Date': '12/02/2023'
  }
  travelFormArray = [{}]
  travelFormSubmit(){
    console.log("travel form submitted")
  }
  addNewLocation(){
    this.travelFormArray.push(this.obj)
    console.log(this.travelFormArray)
  }
}
