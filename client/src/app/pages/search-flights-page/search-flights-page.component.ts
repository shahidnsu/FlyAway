import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/interfaces/flight';
import { FlightOption } from 'src/app/interfaces/flightOption';
import { AmadeusService } from 'src/app/service/amadeus.service';
import { FlightService } from 'src/app/service/flight.service';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

interface formValue {
  from: string;
  to: string;
  date: Date;
  availableFlights: Flight[];
  isSuccess: false;
  isFailed: false;
  index: number;
}

@Component({
  selector: 'app-search-flights-page',
  templateUrl: './search-flights-page.component.html',
  styleUrls: ['./search-flights-page.component.css'],
})
export class SearchFlightsPageComponent implements OnInit {
  nav = false;
  isLoading: boolean = false;
  lottieLoading: boolean = false;
  disabled = true;
  searchFlightsLoading = false;

  options: AnimationOptions = {
    path: './assets/9932-flight-ticket.json',
  };

  onAnimate(animationItem: AnimationItem): void {}
  searchResults: FlightOption[] = [];

  flightNumber!: number;

  obj = {
    FromLocation: 'Dhaka',
    FromAirPort: 'Shahjalal Int Airport',
    ToLocation: 'Dubai',
    ToAirPort: 'Sarjah Int Airport',
    Date: '12/02/2023',
  };

  newLeg: any = {
    from: '',
    to: '',
    date: Date,
    availableFlights: [],
    isFailed: false,
    isSuccess: false,
  };

  constructor(
    private amadeus: AmadeusService,
    private router: Router,
    private _FlightService: FlightService
  ) {}

  ngOnInit(): void {
    console.log('parent', this.newLeg);
  }

  newArray: any = [];
  travelFormArray: any = [
    {
      from: '',
      to: '',
      date: Date,
      isFailed: false,
      isSuccess: false,
      index: 0,
    },
  ];

  lastIndex = this.travelFormArray.length;

  travelFormSubmit() {
    console.log('Search results when submitting: ', this.searchResults);
    this._FlightService.setSearchedFlights(this.searchResults);
    this.lottieLoading = true;

    setTimeout(() => {
      this.lottieLoading = false;
      this.router.navigate(['/select-flights']);
    }, 3500);

    console.log('search button newArray', this.newArray);
  }

  deleteLeg(item: formValue) {
    if(this.travelFormArray.length>=2){
      this.searchResults.splice(item.index, 1);
      this.travelFormArray.splice(item.index, 1);
      this.lastIndex--
      this.checkDisable();
    }
    
  }


  addNewLocation() {
    const newElement = this.searchResults[this.searchResults.length - 1];
    newElement.index = this.lastIndex;
    this.travelFormArray.push(newElement);
    this.lastIndex++;
    console.log('search result array', this.searchResults);
    this.disabled = true;
    
  }

  navigate() {
    if (this.nav) this.router.navigate(['/select-flights']);
  }

  checkDisable() {
    this.disabled = this.travelFormArray.reduce(
      (acc: boolean, curr: formValue) => {
        if (curr.isFailed) return true;
        else return acc;
      },
      false
    );
  }

  searchFlights(values: formValue) {
    const originCode = values.from.replace(/\s/g, '').split('-')[1];
    const destinationCode = values.to.replace(/\s/g, '').split('-')[1];
    const date = values.date;
    this.isLoading = true;

    const { index } = values;
    const element = this.travelFormArray[index];

    this.searchFlightsLoading = true;

    element.isSuccess = false;
    element.isFailed = false;
    this.disabled = true;

    this.amadeus.searchFlight({ originCode, destinationCode, date }).subscribe({
      next: (res) => {
        if (res.length) {
          this.isLoading = false;
          element.isSuccess = true;
          element.isFailed = false;
          this.searchResults[index] = { ...values, availableFlights: res };
          this.searchFlightsLoading = false;
        } else {
          element.isSuccess = false;
          setTimeout(()=>{
            element.isFailed = true;
          },2000);
        }

        this.checkDisable();
         setTimeout(()=>{
            this.isLoading = false;
        },2000);

        setTimeout(()=>{
          element.isSuccess = false;
          element.isFailed = false;
        },4000);

        console.log('Search results: ', this.searchResults);
      },
      error: (error) => {},
    });
  }
}
