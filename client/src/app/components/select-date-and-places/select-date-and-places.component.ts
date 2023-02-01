import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Airport } from 'src/app/interfaces/airport';
import { AmadeusService } from 'src/app/service/amadeus.service';

@Component({
  selector: 'app-select-date-and-places',
  templateUrl: './select-date-and-places.component.html',
  styleUrls: ['./select-date-and-places.component.css']
})

export class SelectDateAndPlacesComponent implements OnInit {
addLocationIntheArray() {
throw new Error('Method not implemented.');
}

  constructor(private amadeusClient: AmadeusService){}

  @Input()
  addNewLocation!: () => void;
  @Input() 
  travelFormArray: any
  travelForm!: FormGroup;
  // locationList!: any

  @Input() newLeg!: Object;
  @Input() buttonDisabled! : boolean;
  
  locationArray: Airport[]=[];

  toLocationArray: Airport[]=[];

  filteredOption!: Observable<any>;
  filteredOptionTo!: Observable<any>;

  ngOnInit(){
    
    this.travelForm = new FormGroup({
      from: new FormControl('',Validators.required),
      to: new FormControl('',Validators.required),
      date: new FormControl('',Validators.required)
    })
    console.log('form valid?',this.travelForm.valid)

    // if(this.travelForm.valid){
    //   this.buttonDisabled = true
    // }

    if(this.travelFormArray.length>1){
      let toValue = this.travelFormArray[this.travelFormArray.length-1].to
      this.travelForm.controls['from'].setValue(toValue);
      // console.log('testing new from',this.travelForm)
    
      let selectedValue = toValue.replace(/\s/g, '').split('-');
      
      const selectedValueObj={
        'city': selectedValue[0],
        'iata': selectedValue[1],
        'name': ''
      }
      this.getAirportRoutes(selectedValueObj)
    }

    this.travelForm.valueChanges.subscribe((value)=>{
      // console.log('child',value)
      this.getAirports(value.from)

      Object.assign(this.newLeg, value);

      // console.log('parent from child', this.newLeg);
    })


    // this.filteredOption = this.travelForm.valueChanges.pipe(
    //   map(value => this._filter(value))
    // );

    // this.filteredOptionTo = this.travelForm.valueChanges.pipe(
    //   map(value => this._tofilter(value))
    // );

    // this.filteredOption.subscribe();
    // this.filteredOptionTo.subscribe();
  }

  private _filter(value: any): any {
    return this.locationArray.filter((location: { city: string | any[]; }) => location.city.includes(value.from));
  }


  private _tofilter(value: any): any {
    return this.toLocationArray.filter(location => location.city.includes(value.to));
  }



  
  // parentFunc(){
  //   this.sendData.emit(this.travelForm.value)
  //   console.log(this.travelForm.value)
  // }

  // submitFlight(){
  //   console.log('Flight details submitted')
  // }
  getAirports(cityName:string) {
    this.amadeusClient.airportSearch(cityName).subscribe((response) => {
      this.locationArray = response;
      // console.log(response);
    });
  }

  getAirportRoutes(airportRoutes:any){
    const {iata} = airportRoutes;
    this.amadeusClient.airportRoute(iata).subscribe((res)=>{
      this.toLocationArray = res;
      console.log('data is coming from iata',res)
    })
    // console.log('airportRoutes',airportRoutes)
  }
  
  }
  
