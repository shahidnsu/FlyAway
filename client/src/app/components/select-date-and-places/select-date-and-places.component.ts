import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-select-date-and-places',
  templateUrl: './select-date-and-places.component.html',
  styleUrls: ['./select-date-and-places.component.css']
})

export class SelectDateAndPlacesComponent implements OnInit {


  @Input()
  addNewLocation!: () => void;
  @Input() 
  travelFormArray: any
  travelForm!: FormGroup;

  
  @Input() newLeg!: Object;
  
  locationArray = [{
    "name":"Kampong Chhnang Airport",
    "city":"sanghai",
    "iata":"KZC"
  },
  {
    "name": "London Airport",
    "city": "London",
    "iata": "YXU"
  }
]

  filteredOption!: Observable<any>;

  ngOnInit(){
    this.travelForm = new FormGroup({
      from: new FormControl(''),
      to: new FormControl(''),
      date: new FormControl('')
    })

    if(this.travelFormArray.length>1){
      this.travelForm.controls['from'].setValue(this.travelFormArray[this.travelFormArray.length-1].to)
    }

    this.travelForm.valueChanges.subscribe((value)=>{
      console.log('child',value)
      Object.assign(this.newLeg, value)
      console.log('parent from child', this.newLeg);


    })
    
    this.filteredOption = this.travelForm.valueChanges.pipe(
      map(value => this._filter(value))
    );

    this.filteredOption.subscribe(value => console.log(value));
    
  }

  private _filter(value: any): any {
    return this.locationArray.filter(location => location.city.includes(value.from));
  }

  
  // parentFunc(){
  //   this.sendData.emit(this.travelForm.value)
  //   console.log(this.travelForm.value)
  // }

  // submitFlight(){
  //   console.log('Flight details submitted')
  // }
  
  }
  
