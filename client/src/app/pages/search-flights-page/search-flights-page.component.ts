import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/interfaces/flight';
import { AmadeusService } from 'src/app/service/amadeus.service';

interface formValue {
  from: string,
  to: string,
  date: Date,
  availableFlights: Flight[]
}

@Component({
  selector: 'app-search-flights-page',
  templateUrl: './search-flights-page.component.html',
  styleUrls: ['./search-flights-page.component.css']
})



export class SearchFlightsPageComponent implements OnInit {

  obj = {
    'FromLocation':'Dhaka',
    'FromAirPort':'Shahjalal Int Airport',
    'ToLocation': 'Dubai',
    'ToAirPort': 'Sarjah Int Airport',
    'Date': '12/02/2023'
  }

  newLeg:any = {
    from: '',
    to: '',
    date: Date,
    availableFlights : []
  }

  i: number = 0
  

  constructor(private amadeus:AmadeusService){}

  ngOnInit(): void {
    
    console.log('parent',this.newLeg)
    
  }

  
  newArray: any=[]
  travelFormArray:any = [{
    from: '',
    to: '',
    date: Date,
    // availableFlights : []
  }]

  resFeedFunc(){
    const originCode = this.newLeg.from.replace(/\s/g, '').split('-')[1]
    const destinationCode = this.newLeg.to.replace(/\s/g, '').split('-')[1]
    const date = this.newLeg.date;

    this.amadeus.searchFlight({originCode,destinationCode,date}).subscribe({next:res=>{
      let newObj = {availableFlights:res}
      console.log('newObj',newObj)
      Object.assign(this.newLeg,newObj)
      console.log('newLeg',this.newLeg)
      // this.newLeg.availableFlights.push([...res])
      // this.travelFormArray[this.i-1].availableFlights.push(res)
      this.travelFormArray.push({...this.newLeg})
      console.log('updated array',this.travelFormArray)
    },
    error:error=>{

      }
    })
    
    
  }

  resFeedFuncSubmit(){
    const originCode = this.newLeg.from.replace(/\s/g, '').split('-')[1]
    const destinationCode = this.newLeg.to.replace(/\s/g, '').split('-')[1]
    const date = this.newLeg.date;

    this.amadeus.searchFlight({originCode,destinationCode,date}).subscribe({next:res=>{
      let newObj = {availableFlights:res}
      console.log('newObj',newObj)
      Object.assign(this.newLeg,newObj)
      console.log('newLeg',this.newLeg)
      // this.newLeg.availableFlights.push([...res])
      // this.travelFormArray[this.i-1].availableFlights.push(res)
      // this.travelFormArray.push({...this.newLeg})
      this.newArray = [...this.travelFormArray]
      this.newArray.push({...this.newLeg})
      console.log('updated array',this.newArray)
    },
    error:error=>{

      }
    })
    
    
  }

  travelFormSubmit(){
    this.resFeedFuncSubmit()
    // this.newArray = [...this.travelFormArray]
    // this.newArray.push({...this.newLeg})
    console.log('search button newArray',this.newArray)
  }
  
  addNewLocation(){
    this.resFeedFunc()
    console.log('add new location button travelFormArray',this.travelFormArray)
  }
}


