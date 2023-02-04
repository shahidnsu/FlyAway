import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Airport } from 'src/app/interfaces/airport';
import { AmadeusService } from 'src/app/service/amadeus.service';

@Component({
  selector: 'app-select-date-and-places',
  templateUrl: './select-date-and-places.component.html',
  styleUrls: ['./select-date-and-places.component.css'],
})
export class SelectDateAndPlacesComponent implements OnInit {
  addLocationIntheArray() {
    throw new Error('Method not implemented.');
  }

  constructor(private amadeusClient: AmadeusService) { }

  @Input() isSuccess!: Boolean
  @Input() isFailed!: Boolean
  @Input()
  addNewLocation!: () => void;
  @Input()
  travelFormArray: any;
  travelForm!: FormGroup;
  @Input() flightNumber!: number;
  @Input() newLeg!: Object;
  @Input() buttonDisabled!: boolean;

  locationArray: Airport[] = [];

  toLocationArray: Airport[] = [];

  filteredOption!: Observable<any>;
  filteredOptionTo!: Observable<any>;
  toField: string = "";

  //user cannot select the preivous date for the flight ticket
  minDate = new Date();

  ngOnInit() {
    this.travelForm = new FormGroup({
      from: new FormControl('', Validators.required),
      to: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),

    });

    if (this.travelFormArray.length > 1) {
      let toValue = this.travelFormArray[this.travelFormArray.length - 1].to;
      this.travelForm.controls['from'].setValue(toValue);

      let selectedValue = toValue.replace(/\s/g, '').split('-');

      const selectedValueObj = {
        city: selectedValue[0],
        iata: selectedValue[1],
        name: '',
      };
      this.getAirportRoutes(selectedValueObj);
    }

    this.travelForm.valueChanges.subscribe((value) => {
      this.getAirports(value.from);

      Object.assign(this.newLeg, value);
    });

    this.travelForm.get('to')?.valueChanges.subscribe(value => {
      this.toField = value;
    })
  }
  

  private _filter(value: any): any {
    return this.locationArray.filter((location: { city: string | any[] }) =>
      location.city.includes(value.from)
    );
  }
  // varibale for to filed 


  //matchedCity: any = []

  // toFilter(): any {
  //   this.matchedCity = [...this.toLocationArray]
  //   this.matchedCity = this.matchedCity.filter((obj: any)=>{
  //     return obj.city.includes(this.toField.toUpperCase())
  //   })
  //   //console.log(this.matchedCity)

  // }



  //cityKeyValue: any = []
  matchedCity: any = []

  toFilter(event: any): any {
    this.matchedCity = [...this.toLocationArray]
    this.matchedCity = this.matchedCity.filter((obj: any) => {
      //console.log(obj)
      return obj.city.includes(this.toField.toUpperCase())
    })
    //console.log(this.matchedCity)

  }

  getAirports(cityName: string) {
    this.amadeusClient.airportSearch(cityName).subscribe((response) => {
      this.locationArray = response;
    });
  }

  getAirportRoutes(airportRoutes: any) {
    const { iata } = airportRoutes;
    this.amadeusClient.airportRoute(iata).subscribe((res) => {
      this.toLocationArray = res;

      //console.log('data is coming from iata', res);
    });
  }
}
